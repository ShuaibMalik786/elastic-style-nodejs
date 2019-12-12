import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { AlertService } from '../../admin/shared/_service/alert.service';
import { SignUpService } from '../service/sign-up.service';
import { Router } from '@angular/router';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService, alertService, router) {
        this.signUpService = signUpService;
        this.alertService = alertService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.isValid()) {
            this.signUpService.signUp(this.form.getData())
                .subscribe(function (success) {
                console.log(success);
                localStorage.setItem('token', success.access_token);
                localStorage.setItem('user', JSON.stringify(success.user));
                _this.router.navigate(['/']);
            }, function (fail) {
                console.log(fail);
                _this.errorMessage = fail.error.error;
            });
        }
    };
    SignUpComponent.prototype.initializeForm = function () {
        this.form = new ValidationManager({
            'userName': 'required|rangeLength:1,255',
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SignUpService,
            AlertService,
            Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map