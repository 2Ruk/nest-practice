import {Injectable, UseFilters} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {UpdateCatDto} from './dto/update-cat.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Cat, CatDocument} from "../../COLLECTION_FEATURE/cat/schema/cat.schema";
import {Model} from "mongoose";
import {ShareFilter} from "../../COLLECTION_FEATURE/share.filter";

@Injectable()
export class CatService {
  constructor(
      @InjectModel(Cat.name) private catModel: Model<CatDocument>
  ) {}

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  async findAll() {
    const $match = {
      $match:{}
    }

    const result = await this.catModel.aggregate([
      $match
    ]).exec();
    if(!result) throw new Error('정보가 제대로 조회되지 않았습니다.')

    return result;
  }

  async insert(cat){
    console.log(cat);
    if(!cat.name) throw new Error('이름이 입력되지 않았습니다.');

    const insert =await new this.catModel(cat).save();

    if(!insert) throw new Error('정보가 제대로 등록되지 않았습니다.');

    return true;

  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
