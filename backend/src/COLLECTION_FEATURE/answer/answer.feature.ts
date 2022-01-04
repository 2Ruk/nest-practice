import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {AnswerFactory} from './schema/answer.schema';

const modelFactory: AsyncModelFactory[] = [AnswerFactory];
export const AnswerFeature = MongooseModule.forFeatureAsync(modelFactory, 'Question');

