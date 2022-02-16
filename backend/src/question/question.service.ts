import {Injectable} from '@nestjs/common';
import {CreateQuestionDto} from './dto/create-question.dto';
import {UpdateQuestionDto} from './dto/update-question.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Question, QuestionDocument} from "../lib/COLLECTION_FEATURE/question/schema/question.schema";
import {Answer, AnswerDocument} from "../lib/COLLECTION_FEATURE/answer/schema/answer.schema";
import {CommonService} from "../lib/common/common.service";

@Injectable()
export class QuestionService {
  constructor(
      @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
      @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
      private commonService: CommonService
  ) {
  }

  async answerBatchCreate(createQuestionDto: CreateQuestionDto[]) {
    const answer: Partial<Answer> = {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      status: 'complete',
      userId: 'tester',
    }

    for (const question of createQuestionDto) {
      answer[question.qName] = question.answer
    }

    return answer;
  }

  async create(createQuestionDto: CreateQuestionDto[]) {
    const answer = await this.answerBatchCreate(createQuestionDto);
    const questionInsert = await new this.questionModel({questions: createQuestionDto}).save();
    const answerInsert = await new this.answerModel(answer).save();
    if (!questionInsert || !answerInsert) throw new Error('등록 실패');
    return 'This action adds a new question';
  }

  async findAll() {
    await this.commonService.test();
    const $group = {
      _id: '$status',
      Q1: {$avg: {$multiply: [{$toInt: "$Q1"}, 20]}},
      Q2: {$avg: {$multiply: [{$toInt: "$Q2"}, 20]}},
      Q3: {$avg: {$multiply: [{$toInt: "$Q3"}, 20]}},
      Q4: {$avg: {$multiply: [{$toInt: "$Q4"}, 20]}}
    }

    const [getAvgData] = await this.answerModel.aggregate([{$group}]).exec();

    return getAvgData
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }




  /**
   * BACK UP
   * @param sNum
   */
  // async queryBackup(sNum:number){
  //   try {
  //     const match = {$match: {_id: sNum}}
  //     const projectSetName = {
  //       $project: {
  //         _id: 0,
  //         "DATA.TYPE": 1,
  //         "DATA.NAME": 1,
  //         "DATA.ANSWERS": 1,
  //         "DATA.V": 1,
  //         "DATA.H": 1
  //       }
  //     }
  //     const unwind = {$unwind: {path: "$DATA"}};
  //     const group = {
  //       $group:
  //           {
  //             _id: "$DATA.NAME",
  //             NAME: {'$last': "$DATA.NAME"},
  //             TYPE: {'$last': "$DATA.TYPE"},
  //             ANSWERS: {'$last': "$DATA.ANSWERS"},
  //             V: {'$last': "$DATA.V"},
  //             H: {'$last': "$DATA.H"},
  //           }
  //     }
  //     const projectSetRowCol = {
  //       $project:
  //           {
  //             _id: 0,
  //             NAME: 1,
  //             TYPE: 1,
  //             ROW_CNT: {
  //               $cond: [
  //                 {$ne: ["$TYPE", 'GRADE_CLICK']},
  //                 {
  //                   $cond: [
  //                     {$ne: ["$V", null]}, {$size: "$V"},
  //                     {$cond: [{$ne: ["$ANSWERS", null]}, 1, 0]}]
  //                 },
  //                 1
  //               ],
  //             },
  //             COL_CNT: {
  //               $cond: [
  //                 {$ne: ["$TYPE", 'GRADE_CLICK']},
  //                 {
  //                   $cond: [
  //                     {$ne: ["$ANSWERS", null]},
  //                     {$size: "$ANSWERS"},
  //                     {$cond: [{$ne: ["$H", null]}, {$size: "$H"}, 0]}
  //                   ]
  //                 },
  //                 {$size: "$V"}
  //               ],
  //             },
  //             ROW_LABEL: {
  //               $cond: [
  //                 {$ne: ["$TYPE", 'GRADE_CLICK']},
  //                 {
  //                   $cond: [{$ne: ["$V", null]}, {
  //                     TEXT: "$V.V",
  //                     KEY: "$V.K"
  //                   }, {$cond: [{$ne: ["$ANSWERS", null]}, {TEXT: "$ANSWERS.V", KEY: "$ANSWERS.K"}, []]}]
  //                 },
  //                 []
  //               ],
  //             },
  //             COL_LABEL: {
  //               $cond: [
  //                 {$ne: ["$TYPE", 'GRADE_CLICK']},
  //                 {
  //                   $cond: [
  //                     {$ne: ["$ANSWERS", null]},
  //                     {TEXT: "$ANSWERS.V", KEY: "$ANSWERS.K"},
  //                     {
  //                       $cond: [
  //                         {$ne: ["$H", null]},
  //                         {TEXT: "$H.V", KEY: "$H.K"},
  //                         []
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {TEXT: "$V.V", KEY: "$V.K"}
  //               ],
  //             },
  //           }
  //     }
  //
  //     return await this.svyInfoModel.aggregate([match, projectSetName, unwind, group, projectSetRowCol]);
  //   } catch (e) {
  //     throw new Error(`Answer 정보를 불러오는데 실패 하였습니다: ${e}`);
  //   }
  // }

  // async getCompleteDataParse(completeList: AnswerCompleteDto[], questionType: QuestionMatchTypeDto[]): Promise<AnswerAddTypeDto[][]> {
  //   return completeList.map((answerInfo) => {
  //     const {DATA} = answerInfo;
  //
  //     return DATA.map((data) => {
  //       const {NAME} = data
  //       const {TYPE,COL_CNT,ROW_CNT,ROW_LABEL,COL_LABEL} = questionType.find((filterValue) => filterValue.NAME === NAME);
  //       const answerKeys = Object.keys(data);
  //
  //       const questionValues = answerKeys.filter((keyItem) => {
  //         const keyChangeDashToDat = keyItem.replace('_', '.');
  //         return !isNaN(Number(keyChangeDashToDat));
  //       });
  //
  //       const returnData: { [key: string]: any } = {};
  //
  //       if (questionValues.length) {
  //         questionValues.forEach((keyItem) => {
  //           returnData[keyItem] = data[keyItem];
  //         })
  //       }
  //
  //       return {
  //         ...returnData,
  //         NAME,
  //         TYPE,
  //         COL_CNT,
  //         ROW_CNT,
  //         ROW_LABEL,
  //         COL_LABEL
  //
  //       }
  //     });
  //
  //   }) as AnswerAddTypeDto[][];
  // }





}
