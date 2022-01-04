import {Injectable} from '@nestjs/common';
import {CreateQuestionDto} from './dto/create-question.dto';
import {UpdateQuestionDto} from './dto/update-question.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Question, QuestionDocument} from "../COLLECTION_FEATURE/question/schema/question.schema";
import {Answer, AnswerDocument} from "../COLLECTION_FEATURE/answer/schema/answer.schema";

@Injectable()
export class QuestionService {
  constructor(
      @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
      @InjectModel(Question.name) private answerModel: Model<AnswerDocument>,
  ) {}

  //TODO : LIST DB에 저장
  //TODO : STATUS COMPLETE 으로 저장할 것
  //TODO : BATCH DB에 저장 ( ANSWER 값만 저장하는 용도 )
  async create(createQuestionDto: CreateQuestionDto[]) {
    const insert = await new this.questionModel({questions: createQuestionDto}).save();
    // console.log(createQuestionDto);

    const test = createQuestionDto.map(value => {
      const test:Partial<Answer> = {
        userId: 'hy',
        Q1:value.answer,
        Q2:'',
        Q3:'',
        Q4:'',
        status: 'complete'
      }
      return test
    });
    console.log(test)
    if (!insert) throw new Error('정보가 제대로 등록되지 않았습니다.');



    return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all question`;
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
