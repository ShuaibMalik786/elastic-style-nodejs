import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var PaginationService = /** @class */ (function () {
    function PaginationService(http) {
        this.http = http;
    }
    PaginationService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/pagination";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PaginationService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/pagination/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PaginationService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/pagination";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PaginationService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/pagination/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PaginationService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/pagination/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PaginationService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    PaginationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PaginationService);
    return PaginationService;
}());
export { PaginationService };
//# sourceMappingURL=pagination.service.js.map