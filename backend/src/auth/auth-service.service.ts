import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
  ) {}

  async validateUser(userId: string, userPw: string){
    return true;
  }
}

