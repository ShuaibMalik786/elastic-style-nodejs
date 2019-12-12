import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormModule } from '../admin/ui-styles/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component/sign-up.component';
var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = tslib_1.__decorate([
        NgModule({
            declarations: [SignUpComponent],
            imports: [
                CommonModule,
                SignUpRoutingModule,
                FormModule,
                ReactiveFormsModule
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());
export { SignUpModule };
//# sourceMappingURL=sign-up.module.js.map