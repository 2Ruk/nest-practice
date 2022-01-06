import {Module} from '@nestjs/common';
import {QuestionService} from './question.service';
import {QuestionController} from './question.controller';
import {QuestionFeature} from "../lib/COLLECTION_FEATURE/question/question.feature";
import {AnswerFeature} from "../lib/COLLECTION_FEATURE/answer/answer.feature";
import {CommonService} from "../lib/common/common.service";

@Module({
  controllers: [QuestionController],
  providers: [QuestionService,CommonService],
  imports: [QuestionFeature,AnswerFeature],
})
export class QuestionModule {}
