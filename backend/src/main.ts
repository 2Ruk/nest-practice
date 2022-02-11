import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {COMMON_TYPE} from './lib/COMMON_TYPE/COMMON_TYPE';

const axios = require('axios');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(COMMON_TYPE.PORT_NUM);
}

bootstrap();
