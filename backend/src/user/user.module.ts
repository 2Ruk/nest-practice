import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {CatFeature} from '../lib/COLLECTION_FEATURE/cat/cat.feature';
import {UserFeature} from "../lib/COLLECTION_FEATURE/user/user.feature";
import {AuthService} from "../auth/auth-service.service";

// import {CatSchema} from "../schema/cat.schema";

@Module({
  controllers: [UserController],
  providers: [UserService,AuthService],
  imports: [CatFeature,UserFeature],
})
export class UserModule {}
