import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var BadgeService = /** @class */ (function () {
    function BadgeService(http) {
        this.http = http;
    }
    BadgeService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/badge";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    BadgeService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/badge/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    BadgeService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/badge";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    BadgeService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/badge/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    BadgeService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/badge/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    BadgeService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    BadgeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BadgeService);
    return BadgeService;
}());
export { BadgeService };
//# sourceMappingURL=badge.service.js.map