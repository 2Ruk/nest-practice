import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {QuestionService} from './question.service';
import {UpdateQuestionDto} from './dto/update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body('Question') question, @Body() body) {
    return this.questionService.create(question);
  }

  @Get()
  async findAll() {

    return {
      result: true,
      chartData: await this.questionService.findAll()
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
