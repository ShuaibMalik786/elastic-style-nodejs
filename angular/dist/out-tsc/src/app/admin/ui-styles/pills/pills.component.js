import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PillsService } from '../../shared/_service/pills.service';
var PillsComponent = /** @class */ (function () {
    function PillsComponent(service) {
        this.service = service;
    }
    PillsComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    PillsComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.pills = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PillsComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PillsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pills',
            templateUrl: './pills.component.html',
            styleUrls: ['./pills.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PillsService])
    ], PillsComponent);
    return PillsComponent;
}());
export { PillsComponent };
//# sourceMappingURL=pills.component.js.map