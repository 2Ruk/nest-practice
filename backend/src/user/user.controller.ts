import {Body, Controller, Get, Post,} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const test = await this.userService.create(createUserDto);
    return this.userService.create(createUserDto);
  }

  @Post()
  findAll(@Body() body) {
    console.log(body)
    // return this.userService.findAll();
  }

  // @Get()
  // findAll(@Body() body) {
  //   console.log(body)
  //   // return this.userService.findAll();
  // }
}
