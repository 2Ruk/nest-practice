import {Injectable} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {UpdateCatDto} from './dto/update-cat.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Cat, CatDocument} from "../../COLLECTION_FEATURE/cat/schema/cat.schema";
import {Model} from "mongoose";

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
    try{
      const result = await this.catModel.aggregate([
        $match
      ]).exec();
      return result;
    }catch (e) {
      console.log(e.error)
    }
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
