import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../lib/COLLECTION_FEATURE/user/schema/user.schema";
import {Model} from "mongoose";
import * as crypto from 'crypto'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async validateUser(userId: string, userPw: string){
    console.log({userId, userPw})
    const user = await this.userModel.findOne({
      userId: userId,
      userPw:  this.hashPassword(userPw),
    })
    // const user = await this.userModel.findOne(userId,userPw);
    console.log('user',user)
    return true;
  }

  private hashPassword(userPwd: string): string {
    return crypto.createHash('sha512').update(userPwd).digest('hex').toString();
  }
}

