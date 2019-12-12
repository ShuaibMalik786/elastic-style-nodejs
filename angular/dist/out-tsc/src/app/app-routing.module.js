import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EuPopupComponent } from './npm-demos/eu-popup/eu-popup.component';
import { EuLoaderComponent } from './npm-demos/eu-loader/eu-loader.component';
var routes = [
    {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'profile/:id',
        loadChildren: './user-account/user-account.module#UserAccountModule'
    },
    {
        path: 'eu-popup',
        component: EuPopupComponent
    },
    {
        path: 'eu-loader',
        component: EuLoaderComponent
    },
    {
        path: '',
        loadChildren: './user/user.module#UserModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map