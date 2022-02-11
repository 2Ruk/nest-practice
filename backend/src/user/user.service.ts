import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, UserDocument} from "../lib/COLLECTION_FEATURE/user/schema/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto):Promise<{str:string, message: string}> {
    return {str:'',message:''}
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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
