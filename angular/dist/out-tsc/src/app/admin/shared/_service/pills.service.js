import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var PillsService = /** @class */ (function () {
    function PillsService(http) {
        this.http = http;
    }
    PillsService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/pills";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PillsService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/pills/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PillsService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/pills";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PillsService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/pills/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PillsService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/pills/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PillsService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    PillsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PillsService);
    return PillsService;
}());
export { PillsService };
//# sourceMappingURL=pills.service.js.map