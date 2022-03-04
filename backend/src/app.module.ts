import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MODULE_ALL} from "./lib/COMMON_TYPE/ROUJTER";

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
