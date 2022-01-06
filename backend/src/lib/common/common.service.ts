import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Answer, AnswerDocument} from "../COLLECTION_FEATURE/answer/schema/answer.schema";
import {Model} from "mongoose";

@Injectable()
export class CommonService {
    constructor(
        @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
    ) {}

    async test(){
        // const result = await this.answerModel.find({}).exec();
        console.log('common service 접근')
    }
}
