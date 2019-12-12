import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from "./../../../../environments/environment";
var StyleGuideService = /** @class */ (function () {
    function StyleGuideService(http) {
        this.http = http;
    }
    StyleGuideService.prototype.getUiComponents = function () {
        var url = environment.apiBaseUrl + "/style-guide/uiComponents";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/style-guide";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/style-guide";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.download = function (id) {
        var url = environment.apiBaseUrl + "/style-guide/genrate/" + id;
        return this.http
            .get(url, { responseType: 'blob' })
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    StyleGuideService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StyleGuideService);
    return StyleGuideService;
}());
export { StyleGuideService };
//# sourceMappingURL=style-guide.service.js.map