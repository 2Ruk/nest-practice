import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RouterModule, Routes} from "nest-router";
import {MODULE_ALL, ROUTES} from "../COMMON_TYPE/ROUJTER";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {Cat, CatSchema} from "../COLLECTION_FEATURE/cat/schema/cat.schema";
import { CatModule } from './cat/cat.module';



@Module({
  imports: [
    RouterModule.forRoutes(ROUTES),
    // MongooseModule.forRoot('mongodb+srv://manager_user:w3iYAKK7Hnix5eK@hy.lgpix.mongodb.net/Cat'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Cat',
      useFactory: () => ({
        uri:'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
      }),
      inject: [ConfigService],
    }),
    ...MODULE_ALL,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
