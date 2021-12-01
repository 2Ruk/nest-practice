import {Controller, Get, HttpService} from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private httpService: HttpService,
  ) {}

  @Get()
  async getDocs(){

    const a = await this.appService.getHello()



    // const axios = require('axios')
    //
    // const {data} = await axios({
    //   url:'https://www.naver.com'
    //   method : 'get',
    // });

    // const axios = require('axios')
    // const {data} = await this.axios({
    //   method : 'get',
    //   url : `https://www.naver.com`
    // });
    // console.log(data);
    // console.log(data)
    // // console.log(data)
    // }
  }



}
