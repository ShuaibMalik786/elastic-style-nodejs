import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
var routes = [
    {
        path: '',
        component: LoginComponent
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
export { LoginRoutingModule };
//# sourceMappingURL=login-routing.module.js.map