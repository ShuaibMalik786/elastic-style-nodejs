import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var TablesService = /** @class */ (function () {
    function TablesService(http) {
        this.http = http;
    }
    TablesService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/tables";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TablesService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/tables/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TablesService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/tables";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TablesService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/tables/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TablesService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/tables/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TablesService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    TablesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TablesService);
    return TablesService;
}());
export { TablesService };
//# sourceMappingURL=tables.service.js.map