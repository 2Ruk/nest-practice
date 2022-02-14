import {Module} from '@nestjs/common';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth-service.service";
import {LocalStrategy} from "./local.strategy";
import {UserFeature} from "../lib/COLLECTION_FEATURE/user/user.feature";

@Module({
  imports: [UserModule, PassportModule,UserFeature],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {
}
