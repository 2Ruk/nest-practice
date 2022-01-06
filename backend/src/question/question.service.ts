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
  ) {}

  async answerBatchCreate(createQuestionDto: CreateQuestionDto[]){
    const answer: Partial<Answer> = {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      status: 'complete',
      userId: 'tester',
    }

    for(const question of createQuestionDto){
      answer[question.qName]  = question.answer
    }

    return answer;
  }

  async create(createQuestionDto: CreateQuestionDto[]) {
    const answer = await this.answerBatchCreate(createQuestionDto);
    const questionInsert = await new this.questionModel({questions: createQuestionDto}).save();
    const answerInsert = await new this.answerModel(answer).save();
    if(!questionInsert||!answerInsert) throw new Error('등록 실패');
    return 'This action adds a new question';
  }

  async findAll() {
    await this.commonService.test();
    const $group = {
      _id:'$status',
      Q1: {$avg:{$multiply:[{$toInt:"$Q1"},20]}},
      Q2: {$avg:{$multiply:[{$toInt:"$Q2"},20]}},
      Q3: {$avg:{$multiply:[{$toInt:"$Q3"},20]}},
      Q4: {$avg:{$multiply:[{$toInt:"$Q4"},20]}}
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
}
