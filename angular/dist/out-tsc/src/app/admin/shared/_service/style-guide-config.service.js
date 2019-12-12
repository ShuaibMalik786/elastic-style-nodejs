import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
var StyleGuideConfigService = /** @class */ (function () {
    function StyleGuideConfigService(http) {
        this.http = http;
    }
    StyleGuideConfigService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/style-guide-config";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideConfigService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/style-guide-config/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideConfigService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/style-guide-config";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideConfigService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/style-guide-config/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideConfigService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/style-guide-config/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    StyleGuideConfigService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    StyleGuideConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StyleGuideConfigService);
    return StyleGuideConfigService;
}());
export { StyleGuideConfigService };
//# sourceMappingURL=style-guide-config.service.js.map