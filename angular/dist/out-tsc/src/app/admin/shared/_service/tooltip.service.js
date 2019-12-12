import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var TooltipService = /** @class */ (function () {
    function TooltipService(http) {
        this.http = http;
    }
    TooltipService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/tooltip";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TooltipService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/tooltip/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TooltipService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/tooltip";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TooltipService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/tooltip/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TooltipService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/tooltip/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TooltipService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    TooltipService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TooltipService);
    return TooltipService;
}());
export { TooltipService };
//# sourceMappingURL=tooltip.service.js.map