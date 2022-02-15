import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../lib/COLLECTION_FEATURE/user/schema/user.schema";
import {Model} from "mongoose";
import * as crypto from 'crypto'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  private hashPassword = (userPwd: string): string => crypto.createHash('sha512').update(userPwd).digest('hex').toString();

  async validateUser(userId: string, userPw: string) {
    return this.userModel.findOne({
      userId: userId,
      userPw: this.hashPassword(userPw),
    });
  }

}

