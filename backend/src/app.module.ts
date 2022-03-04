import {Module} from '@nestjs/common';


import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Cat} from './lib/COLLECTION_FEATURE/cat/schema/cat.schema';
import {MODULE_ALL} from "@api/lib/COMMON_TYPE/ROUJTER";
import {AppController} from "@api/app.controller";
import {AppService} from "@api/app.service";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Cat',
      useFactory: () => ({
        uri: 'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
      inject: [ConfigService],
    }),
    ...MODULE_ALL,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
