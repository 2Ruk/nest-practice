import {AsyncModelFactory, Prop, Schema, SchemaFactory,} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {
  @Prop()
  userId: string;

  @Prop()
  status: string;

  @Prop()
  Q1: string;

  @Prop()
  Q2: string;

  @Prop()
  Q3: string;

  @Prop()
  Q4: string;


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
