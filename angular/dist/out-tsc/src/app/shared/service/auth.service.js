import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map