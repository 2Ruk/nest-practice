import {AsyncModelFactory, Prop, Schema, SchemaFactory,} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ default: new Date() })
  createDate: Date;

  @Prop({ default: new Date() })
  updateDate: Date;

  @Prop({ default: false })
  isDelete: boolean;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
export const CatFactory: AsyncModelFactory = {
  name: Cat.name,
  useFactory: () => CatSchema,
};
