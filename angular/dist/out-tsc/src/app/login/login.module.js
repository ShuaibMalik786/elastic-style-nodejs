import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormModule } from '../admin/ui-styles/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        NgModule({
            declarations: [LoginComponent],
            imports: [
                CommonModule,
                LoginRoutingModule,
                FormModule,
                ReactiveFormsModule
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map