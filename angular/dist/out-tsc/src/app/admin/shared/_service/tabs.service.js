import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var TabsService = /** @class */ (function () {
    function TabsService(http) {
        this.http = http;
    }
    TabsService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/tabs";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TabsService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/tabs/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TabsService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/tabs";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TabsService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/tabs/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TabsService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/tabs/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    TabsService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    TabsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TabsService);
    return TabsService;
}());
export { TabsService };
//# sourceMappingURL=tabs.service.js.map