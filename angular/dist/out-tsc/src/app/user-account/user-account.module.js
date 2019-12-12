import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSgComponent } from './user-sg/user-sg.component';
import { UserModule } from '../user/user.module';
import { FormModule } from '../admin/ui-styles/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = tslib_1.__decorate([
        NgModule({
            declarations: [UserProfileComponent, UserSgComponent],
            imports: [
                CommonModule,
                UserAccountRoutingModule,
                UserModule,
                FormModule,
                ReactiveFormsModule
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());
export { UserAccountModule };
//# sourceMappingURL=user-account.module.js.map