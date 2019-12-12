import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BadgeService } from '../../shared/_service/badge.service';
var BadgeComponent = /** @class */ (function () {
    function BadgeComponent(service) {
        this.service = service;
    }
    BadgeComponent.prototype.ngOnInit = function () {
        this.loadButtons();
    };
    BadgeComponent.prototype.loadButtons = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.badges = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    BadgeComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadButtons();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    BadgeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-badge',
            templateUrl: './badge.component.html',
            styleUrls: ['./badge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BadgeService])
    ], BadgeComponent);
    return BadgeComponent;
}());
export { BadgeComponent };
//# sourceMappingURL=badge.component.js.map