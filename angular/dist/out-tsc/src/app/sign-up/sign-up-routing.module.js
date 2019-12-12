import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component/sign-up.component';
var routes = [
    {
        path: '',
        component: SignUpComponent
    }
];
var SignUpRoutingModule = /** @class */ (function () {
    function SignUpRoutingModule() {
    }
    SignUpRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], SignUpRoutingModule);
    return SignUpRoutingModule;
}());
export { SignUpRoutingModule };
//# sourceMappingURL=sign-up-routing.module.js.map