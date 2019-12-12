import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSgComponent } from './user-sg/user-sg.component';
var routes = [
    {
        path: '',
        component: UserProfileComponent
    },
    {
        path: 'style-guide',
        component: UserSgComponent
    }
];
var UserAccountRoutingModule = /** @class */ (function () {
    function UserAccountRoutingModule() {
    }
    UserAccountRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], UserAccountRoutingModule);
    return UserAccountRoutingModule;
}());
export { UserAccountRoutingModule };
//# sourceMappingURL=user-account-routing.module.js.map