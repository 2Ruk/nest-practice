import {Body, Controller, Delete, Get, Param, Patch, Post, UseFilters,} from '@nestjs/common';
import {CatService} from './cat.service';
import {CreateCatDto} from './dto/create-cat.dto';
import {UpdateCatDto} from './dto/update-cat.dto';
import {ShareFilter} from '../COLLECTION_FEATURE/share.filter';

@Controller('cat')
@UseFilters(new ShareFilter())
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    return this.catService.create(createCatDto);
  }
  @Get('/list')
  findAll() {
    return this.catService.findAll()  ;
  }
  @Post('/insert')
  async insertCat(@Body() cat: CreateCatDto) {
    console.log(cat)
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

  @Delete('')
  remove(@Body() body) {
    return this.catService.remove(body);

  }
}
