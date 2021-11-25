import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {COMMON_TYPE} from "./COMMON_TYPE/COMMON_TYPE";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix(COMMON_TYPE.PREFIX);

  // mongodb+srv://manager_user:w3iYAKK7Hnix5eK@hy.lgpix.mongodb.net/test
  //
  app.setGlobalPrefix('/api');


  await app.listen(COMMON_TYPE.PORT_NUM);
}


bootstrap();
