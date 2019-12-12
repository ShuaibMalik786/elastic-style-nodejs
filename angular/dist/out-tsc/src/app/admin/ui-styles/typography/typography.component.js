import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TypographyService } from '../../shared/_service/typography.service';
var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(service) {
        this.service = service;
    }
    TypographyComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    TypographyComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.typographies = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TypographyComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TypographyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-typography',
            templateUrl: './typography.component.html',
            styleUrls: ['./typography.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TypographyService])
    ], TypographyComponent);
    return TypographyComponent;
}());
export { TypographyComponent };
//# sourceMappingURL=typography.component.js.map