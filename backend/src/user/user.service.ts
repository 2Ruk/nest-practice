import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, UserDocument} from "../lib/COLLECTION_FEATURE/user/schema/user.schema";
import * as crypto from 'crypto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser =  {
      ...createUserDto,
      userPw: this.hashPassword(createUserDto.userPw)
    } as CreateUserDto;
    const userInfo = new this.userModel(newUser).save();
    return userInfo;
  }

  test() {
    const createCatDto:User = {
      userId:'hy',
      userPw: '123'
    };
    const createdCat = new this.userModel(createCatDto);

    return createdCat.save();
    // return '여기다.'
  }

  async findOne(id: string,pw:string) {
    console.log({id,pw})
    return {
      userId: 'hychoi',
      userName:'hychoi'
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private hashPassword(userPwd: string): string {
    return crypto.createHash('sha512').update(userPwd).digest('hex').toString();
  }
}

