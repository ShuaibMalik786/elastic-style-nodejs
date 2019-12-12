import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
var UserAccountService = /** @class */ (function () {
    function UserAccountService(http) {
        this.http = http;
    }
    UserAccountService.prototype.getUser = function (id) {
        var url = environment.apiBaseUrl + "/user/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserAccountService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/user/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserAccountService.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    UserAccountService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    UserAccountService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserAccountService);
    return UserAccountService;
}());
export { UserAccountService };
//# sourceMappingURL=user-account.service.js.map