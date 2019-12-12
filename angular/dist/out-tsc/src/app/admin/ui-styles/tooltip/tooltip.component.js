import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TooltipService } from '../../shared/_service/tooltip.service';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(service) {
        this.service = service;
    }
    TooltipComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    TooltipComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.tooltips = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TooltipComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TooltipComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tooltip',
            templateUrl: './tooltip.component.html',
            styleUrls: ['./tooltip.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TooltipService])
    ], TooltipComponent);
    return TooltipComponent;
}());
export { TooltipComponent };
//# sourceMappingURL=tooltip.component.js.map