import { Routes} from 'nest-router';
import { UserModule } from "../user/user.module";
import {TestModule} from "../test/test.module";

export const MODULE_ALL = [
    UserModule,
    TestModule
]
export const ROUTES: Routes = []

for(let module of MODULE_ALL){
    const modulePath = module.toString().substring(6).split('Module')[0].toLowerCase();
    ROUTES.push(
        {
            path:`/${modulePath}`,
            module:module,
        }
    )
}
