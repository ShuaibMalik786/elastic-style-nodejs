import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var FormsService = /** @class */ (function () {
    function FormsService(http) {
        this.http = http;
    }
    FormsService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/forms";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    FormsService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/forms/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    FormsService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/forms";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    FormsService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/forms/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    FormsService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/forms/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    FormsService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    FormsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FormsService);
    return FormsService;
}());
export { FormsService };
//# sourceMappingURL=forms.service.js.map