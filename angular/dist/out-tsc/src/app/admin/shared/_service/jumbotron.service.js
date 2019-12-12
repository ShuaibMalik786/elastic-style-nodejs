import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var JumbotronService = /** @class */ (function () {
    function JumbotronService(http) {
        this.http = http;
    }
    JumbotronService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/jumbotron";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    JumbotronService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/jumbotron/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    JumbotronService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/jumbotron";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    JumbotronService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/jumbotron/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    JumbotronService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/jumbotron/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    JumbotronService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    JumbotronService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], JumbotronService);
    return JumbotronService;
}());
export { JumbotronService };
//# sourceMappingURL=jumbotron.service.js.map