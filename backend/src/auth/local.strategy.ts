import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from "./auth-service.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'userId',
      passwordField: 'userPw'
    });
  }

  async validate(userId: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(userId, password);
    if (!user) throw new UnauthorizedException('로그인정보가 올바르지 않습니다.');
    return user;
  }
}
