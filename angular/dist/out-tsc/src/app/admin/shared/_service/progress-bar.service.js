import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var ProgressBarService = /** @class */ (function () {
    function ProgressBarService(http) {
        this.http = http;
    }
    ProgressBarService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/progressBar";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ProgressBarService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/progressBar/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ProgressBarService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/progressBar";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ProgressBarService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/progressBar/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ProgressBarService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/progressBar/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ProgressBarService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    ProgressBarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProgressBarService);
    return ProgressBarService;
}());
export { ProgressBarService };
//# sourceMappingURL=progress-bar.service.js.map