import {
  AsyncModelFactory,
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Question & Document;

@Schema()
export class Question {

  @Prop({ default: new Date() })
  createDate: Date;

  @Prop({ default: new Date() })
  updateDate: Date;

  @Prop({ default: false })
  isDelete: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
export const QuestionFactory: AsyncModelFactory = {
  name: Question.name,
  useFactory: () => QuestionSchema,
};
