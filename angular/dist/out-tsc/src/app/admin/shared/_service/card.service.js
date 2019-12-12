import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from "./../../../../environments/environment";
var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.getAll = function () {
        var url = environment.apiBaseUrl + "/card";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    CardService.prototype.getOne = function (id) {
        var url = environment.apiBaseUrl + "/card/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    CardService.prototype.create = function (data) {
        var url = environment.apiBaseUrl + "/card";
        return this.http
            .post(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    CardService.prototype.update = function (id, data) {
        var url = environment.apiBaseUrl + "/card/" + id;
        return this.http
            .put(url, data)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    CardService.prototype.delete = function (id) {
        var url = environment.apiBaseUrl + "/card/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    CardService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    CardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CardService);
    return CardService;
}());
export { CardService };
//# sourceMappingURL=card.service.js.map