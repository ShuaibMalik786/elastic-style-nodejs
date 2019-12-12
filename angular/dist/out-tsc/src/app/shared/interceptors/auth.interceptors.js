import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoginService } from '../../login/service/login.service';
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(loginService) {
        this.loginService = loginService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.loginService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [LoginService])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
export { TokenInterceptor };
//# sourceMappingURL=auth.interceptors.js.map