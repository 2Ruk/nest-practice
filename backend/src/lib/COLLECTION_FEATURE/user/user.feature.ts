import {AsyncModelFactory, MongooseModule} from '@nestjs/mongoose';
import {User, UserFactory} from './schema/user.schema';

const modelFactory: AsyncModelFactory[] = [UserFactory];
export const UserFeature = MongooseModule.forFeatureAsync(modelFactory, User.name);

