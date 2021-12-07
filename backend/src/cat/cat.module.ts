import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { CatFeature } from '../COLLECTION_FEATURE/cat/cat.feature';

@Module({
  controllers: [CatController],
  providers: [CatService],
  imports: [CatFeature],
})
export class CatModule {}
