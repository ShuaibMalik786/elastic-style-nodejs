import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ValidationManager } from 'ng2-validation-manager';
import { LoginService } from '../service/login.service';
import { AlertService } from '../../admin/shared/_service/alert.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, alertService, router) {
        this.loginService = loginService;
        this.alertService = alertService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.isValid()) {
            this.loginService.login(this.form.getData())
                .subscribe(function (success) {
                localStorage.setItem('token', success.access_token);
                localStorage.setItem('user', JSON.stringify(success.user));
                _this.router.navigate(['/']);
            }, function (fail) {
                console.log(fail);
                _this.errorMessage = fail.error.error;
            });
        }
    };
    LoginComponent.prototype.initializeForm = function () {
        this.form = new ValidationManager({
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService,
            AlertService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map