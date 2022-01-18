import { AsyncModelFactory, MongooseModule } from '@nestjs/mongoose';
import {AnswerFactory} from './schema/answer.schema';

const modelFactory: AsyncModelFactory[] = [AnswerFactory];
export const QuestionFeature = MongooseModule.forFeatureAsync(modelFactory, 'Answer');

