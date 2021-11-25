import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'TEST1';
  }

  getBye():string{
    return 'dd';
  }
}
