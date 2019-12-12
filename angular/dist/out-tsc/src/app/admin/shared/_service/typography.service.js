import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var TypographyService = /** @class */ (function () {
    function TypographyService(http) {
        this.http = http;
    }
    TypographyService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/typography";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TypographyService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/typography/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TypographyService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/typography";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TypographyService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/typography/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TypographyService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/typography/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TypographyService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    TypographyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TypographyService);
    return TypographyService;
}());
export { TypographyService };
//# sourceMappingURL=typography.service.js.map