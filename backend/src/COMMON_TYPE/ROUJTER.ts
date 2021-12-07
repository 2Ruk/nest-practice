import { Routes } from 'nest-router';
import { UserModule } from '../user/user.module';
import { CatModule } from '../cat/cat.module';

export const MODULE_ALL = [UserModule, CatModule];
export const ROUTES: Routes = [];

for (const module of MODULE_ALL) {
  const modulePath = module
    .toString()
    .substring(6)
    .split('Module')[0]
    .toLowerCase();
  ROUTES.push({
    path: `/${modulePath}`,
    module: module,
  });
}
