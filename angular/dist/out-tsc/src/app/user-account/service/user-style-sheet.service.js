import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
var UserStyleSheetService = /** @class */ (function () {
    function UserStyleSheetService(http) {
        this.http = http;
    }
    UserStyleSheetService.prototype.getSGs = function (userId) {
        var url = environment.apiBaseUrl + "/style-guide/user/" + userId;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleSheetService.prototype.download = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/genrate/" + id;
        return this.http
            .get(url, { responseType: 'blob' })
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleSheetService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    UserStyleSheetService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserStyleSheetService);
    return UserStyleSheetService;
}());
export { UserStyleSheetService };
//# sourceMappingURL=user-style-sheet.service.js.map