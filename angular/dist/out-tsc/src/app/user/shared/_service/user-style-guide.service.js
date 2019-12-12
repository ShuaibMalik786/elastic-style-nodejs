import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var UserStyleGuideService = /** @class */ (function () {
    function UserStyleGuideService(http) {
        this.http = http;
    }
    UserStyleGuideService.prototype.getUiComponents = function () {
        var url = environment.apiBaseUrl + "/style-guide/uiComponents";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/style-guide";
        return this.http
            .post(url, data, { responseType: "blob" })
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/style-guide";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.download = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/genrate/" + id;
        return this.http
            .get(url, { responseType: "blob" })
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    UserStyleGuideService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    UserStyleGuideService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserStyleGuideService);
    return UserStyleGuideService;
}());
export { UserStyleGuideService };
//# sourceMappingURL=user-style-guide.service.js.map