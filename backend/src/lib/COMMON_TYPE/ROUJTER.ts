import {UserModule} from '../../user/user.module';
import {CatModule} from '../../cat/cat.module';
import {QuestionModule} from "../../question/question.module";
import {AuthModule} from "../../auth/auth.module";

export const MODULE_ALL = [UserModule, CatModule, QuestionModule,AuthModule];
// export const ROUTES: Routes = [];
//
// for (const module of MODULE_ALL) {
//   const modulePath = module
//     .toString()
//     .substring(6)
//     .split('Module')[0]
//     .toLowerCase();
//   ROUTES.push({
//     path: `/${modulePath}`,
//     module: module,
//   });
// }
