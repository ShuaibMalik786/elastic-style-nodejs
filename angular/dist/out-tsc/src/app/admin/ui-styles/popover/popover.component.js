import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverService } from '../../shared/_service/popover.service';
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(service) {
        this.service = service;
    }
    PopoverComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    PopoverComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.popovers = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PopoverComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverService])
    ], PopoverComponent);
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map