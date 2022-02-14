import {Body, Controller, Post, UseGuards,} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    // const test = await this.userService.create(createUserDto);
    return this.userService.create(createUserDto);
  }


  @UseGuards(AuthGuard('local'))
  @Post('/login')
  findAll(@Body() body) {
    // console.log(body)
    console.log(body)
    // return this.userService.test();
  }

  // @Get()
  // findAll(@Body() body) {
  //   console.log(body)
  //   // return this.userService.findAll();
  // }
}
