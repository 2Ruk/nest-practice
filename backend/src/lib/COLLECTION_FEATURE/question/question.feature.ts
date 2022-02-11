import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {QuestionFactory} from './schema/question.schema';

const modelFactory: AsyncModelFactory[] = [QuestionFactory];
export const QuestionFeature = MongooseModule.forFeatureAsync(modelFactory, 'Cat');

