import {
  AsyncModelFactory,
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {SurveyType} from "../../../COMMON_TYPE/Survey";

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {

  @Prop()
  questions: SurveyType.QuestionList;

  @Prop({ default: new Date() })
  createDate: Date;

  @Prop({ default: new Date() })
  updateDate: Date;

  @Prop({ default: false })
  isDelete: boolean;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
export const AnswerFactory: AsyncModelFactory = {
  name: Answer.name,
  useFactory: () => AnswerSchema,
};
