import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {UserFactory} from './schema/user.schema';

const modelFactory: AsyncModelFactory[] = [UserFactory];
export const UserFeature = MongooseModule.forFeatureAsync(modelFactory, 'Cat');

