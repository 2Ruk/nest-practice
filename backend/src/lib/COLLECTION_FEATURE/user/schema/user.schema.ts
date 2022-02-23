import {AsyncModelFactory, Prop, Schema, SchemaFactory,} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  userId: string;

  @Prop()
  userPw: string;

  @Prop()
  userName: string;

  @Prop({ default: new Date() })
  createDate?: Date;

  @Prop({ default: new Date() })
  updateDate?: Date;

  @Prop({ default: false })
  isDelete?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const UserFactory: AsyncModelFactory = {
  name: User.name,
  useFactory: () => UserSchema,
};
