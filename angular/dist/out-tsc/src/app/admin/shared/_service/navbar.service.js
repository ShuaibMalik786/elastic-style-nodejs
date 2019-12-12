import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var NavbarService = /** @class */ (function () {
    function NavbarService(http) {
        this.http = http;
    }
    NavbarService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/navbar";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    NavbarService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/navbar/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    NavbarService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/navbar";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    NavbarService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/navbar/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    NavbarService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/navbar/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    NavbarService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    NavbarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NavbarService);
    return NavbarService;
}());
export { NavbarService };
//# sourceMappingURL=navbar.service.js.map