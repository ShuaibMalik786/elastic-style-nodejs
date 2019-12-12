import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
    }
    SignUpService.prototype.signUp = function (data) {
        var url = environment.apiBaseUrl + "/user/signUp";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    SignUpService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    SignUpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SignUpService);
    return SignUpService;
}());
export { SignUpService };
//# sourceMappingURL=sign-up.service.js.map