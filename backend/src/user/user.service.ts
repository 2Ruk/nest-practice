import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Cat, CatDocument} from "../../COLLECTION_FEATURE/cat/schema/cat.schema";
import {Model} from "mongoose";

@Injectable()
export class UserService {
  constructor(
      @InjectModel(Cat.name) private catModel: Model<CatDocument>
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const createCatDto = {
      name : '걸오',
      age : 6,
      breed: '치즈태비'
    }
    const createdCat = new this.catModel(createCatDto);
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
