import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MODULE_ALL} from './COMMON_TYPE/ROUJTER';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Cat} from './COLLECTION_FEATURE/cat/schema/cat.schema';

@Module({
  imports: [
    // RouterModule.forRoutes(ROUTES),
    // MongooseModule.forRoot('mongodb+srv://manager_user:w3iYAKK7Hnix5eK@hy.lgpix.mongodb.net/Cat'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Cat',
      useFactory: () => ({
        uri: 'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Question',
      useFactory: () => ({
        uri: 'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Answer',
      useFactory: () => ({
        uri: 'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
      }),
      inject: [ConfigService],
    }),
    ...MODULE_ALL,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
