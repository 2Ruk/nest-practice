import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {CatFactory} from './schema/cat.schema';

const modelFactory: AsyncModelFactory[] = [CatFactory];
export const CatFeature = MongooseModule.forFeatureAsync(modelFactory, 'Cat');
