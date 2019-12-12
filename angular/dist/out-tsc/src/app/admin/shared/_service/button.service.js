import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
var ButtonService = /** @class */ (function () {
    function ButtonService(http) {
        this.http = http;
    }
    ButtonService.prototype.getButtons = function () {
        var url = environment.apiBaseUrl + "/admin/button";
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ButtonService.prototype.getButton = function (id) {
        var url = environment.apiBaseUrl + "/admin/button/" + id;
        return this.http
            .get(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ButtonService.prototype.addButton = function (button) {
        var url = environment.apiBaseUrl + "/admin/button";
        return this.http
            .post(url, button)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ButtonService.prototype.updateButton = function (id, button) {
        var url = environment.apiBaseUrl + "/admin/button/" + id;
        return this.http
            .put(url, button)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ButtonService.prototype.removeButton = function (id) {
        var url = environment.apiBaseUrl + "/admin/button/" + id;
        return this.http
            .delete(url)
            .pipe(map(function (response) { return response; }, catchError(this.handleError)));
    };
    ButtonService.prototype.handleError = function (error) {
        return observableThrowError(error.json());
    };
    ButtonService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ButtonService);
    return ButtonService;
}());
export { ButtonService };
//# sourceMappingURL=button.service.js.map