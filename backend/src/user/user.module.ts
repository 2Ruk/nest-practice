import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {CatFeature} from "../COLLECTION_FEATURE/cat/cat.feature";
// import {CatSchema} from "../schema/cat.schema";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports :[CatFeature]
})
export class UserModule {}
