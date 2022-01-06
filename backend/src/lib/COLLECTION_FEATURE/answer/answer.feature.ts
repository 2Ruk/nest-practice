import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {Answer, AnswerFactory} from './schema/answer.schema';

const modelFactory: AsyncModelFactory[] = [AnswerFactory];
export const AnswerFeature = MongooseModule.forFeatureAsync(modelFactory, Answer.name);

