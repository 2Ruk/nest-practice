import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MODULE_ALL} from './lib/COMMON_TYPE/ROUJTER';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Cat} from './lib/COLLECTION_FEATURE/cat/schema/cat.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'Cat',
      useFactory: () => ({
        uri: 'mongodb+srv://hychoi:2613@hy.lgpix.mongodb.net/Cat',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    ...MODULE_ALL,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
