import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RouterModule, Routes} from "nest-router";
import {MODULE_ALL, ROUTES} from "./COMMON_TYPE/ROUJTER";
import { TestModule } from './test/test.module';



@Module({
  imports: [
    RouterModule.forRoutes(ROUTES),
    ...MODULE_ALL,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
