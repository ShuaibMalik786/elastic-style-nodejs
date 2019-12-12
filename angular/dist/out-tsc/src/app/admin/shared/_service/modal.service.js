import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var ModalService = /** @class */ (function () {
    function ModalService(http) {
        this.http = http;
    }
    ModalService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/modal";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ModalService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/modal/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ModalService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/modal";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ModalService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/modal/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ModalService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/modal/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ModalService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    ModalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ModalService);
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=modal.service.js.map