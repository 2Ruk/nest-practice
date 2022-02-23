import {Body, Controller, Post, Req, UseGuards,} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @UseGuards(AuthGuard('local'))
  @Post('/login')
  findAll(@Req() req) {
    const {user} = req;
    const {userId, userName} = user;
    return {
      userId,
      userName,
      token: 'ds',
    };
  }

}
