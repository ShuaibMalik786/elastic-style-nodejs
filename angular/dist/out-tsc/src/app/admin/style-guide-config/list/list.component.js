import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StyleGuideConfigService } from '../../shared/_service/style-guide-config.service';
var ListComponent = /** @class */ (function () {
    function ListComponent(alertService) {
        this.alertService = alertService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ListComponent.prototype.loadAll = function () {
        var _this = this;
        this.alertService.getAll().subscribe(function (success) {
            _this.config = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alertService.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ListComponent.prototype.changeStatus = function (id, status) {
        var _this = this;
        var data = { active: status };
        this.alertService.update(id, data).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideConfigService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map