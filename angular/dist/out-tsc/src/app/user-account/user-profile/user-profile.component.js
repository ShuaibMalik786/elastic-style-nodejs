import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserAccountService } from '../service/user-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';
import { ToasterService } from '../../shared/service/toaster.service';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userAccountService, route, router, toasterService) {
        this.userAccountService = userAccountService;
        this.route = route;
        this.router = router;
        this.toasterService = toasterService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.loadUser();
        this.initiateForm();
    };
    UserProfileComponent.prototype.loadUser = function () {
        var _this = this;
        this.userAccountService.getUser(this.userId)
            .subscribe(function (success) {
            _this.user = success;
            _this.form.setValue({
                'userName': _this.user.userName,
                'email': _this.user.email,
            });
        }, function (fail) {
            _this.toasterService.error('Failed to load data');
        });
    };
    UserProfileComponent.prototype.logout = function () {
        this.userAccountService.logOut();
        this.router.navigate(['/']);
    };
    UserProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.isValid()) {
            this.userAccountService.update(this.userId, this.form.getData())
                .subscribe(function (success) {
                _this.toasterService.success('Profile updated');
                _this.loadUser();
            }, function (fail) {
                _this.toasterService.error('Failed to update profile');
            });
        }
    };
    UserProfileComponent.prototype.initiateForm = function () {
        this.form = new ValidationManager({
            'userName': 'required|rangeLength:1,255',
            'email': 'required|email',
        });
    };
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserAccountService,
            ActivatedRoute,
            Router,
            ToasterService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map