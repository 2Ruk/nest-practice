import {Module} from '@nestjs/common';
import {QuestionService} from './question.service';
import {QuestionController} from './question.controller';
import {QuestionFeature} from "../COLLECTION_FEATURE/question/question.feature";
import {AnswerFeature} from "../COLLECTION_FEATURE/answer/answer.feature";

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [QuestionFeature,AnswerFeature],
})
export class QuestionModule {}
