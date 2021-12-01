import {Controller, Get, Post, Body, Patch, Param, Delete, UseFilters} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {ShareFilter} from "../../COLLECTION_FEATURE/share.filter";

@Controller()
@UseFilters(new ShareFilter())
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
  @Get('/getList')
  findAll() {
    return this.catService.findAll();
  }
  @Post('/insert')
  async insertCat(@Body() cat:CreateCatDto) {
    return this.catService.insert(cat);

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
