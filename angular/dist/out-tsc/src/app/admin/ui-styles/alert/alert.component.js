import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertService } from '../../shared/_service/alert.service';
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    AlertComponent.prototype.loadAll = function () {
        var _this = this;
        this.alertService.getAll().subscribe(function (success) {
            _this.alerts = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    AlertComponent.prototype.delete = function (id) {
        var _this = this;
        this.alertService.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    AlertComponent = tslib_1.__decorate([
        Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map