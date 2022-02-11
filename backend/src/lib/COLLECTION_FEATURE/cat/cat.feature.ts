import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {Cat, CatFactory} from './schema/cat.schema';

const modelFactory: AsyncModelFactory[] = [CatFactory];
export const CatFeature = MongooseModule.forFeatureAsync(modelFactory, 'Cat');
