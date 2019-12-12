import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var AlertService = /** @class */ (function () {
    function AlertService(http) {
        this.http = http;
    }
    AlertService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/alert";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    AlertService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/alert/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    AlertService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/alert";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    AlertService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/alert/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    AlertService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/alert/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    AlertService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    AlertService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AlertService);
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map