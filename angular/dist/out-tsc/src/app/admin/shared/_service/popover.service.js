import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var PopoverService = /** @class */ (function () {
    function PopoverService(http) {
        this.http = http;
    }
    PopoverService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/popover";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PopoverService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/popover/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PopoverService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/popover";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PopoverService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/popover/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PopoverService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/popover/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    PopoverService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    PopoverService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PopoverService);
    return PopoverService;
}());
export { PopoverService };
//# sourceMappingURL=popover.service.js.map