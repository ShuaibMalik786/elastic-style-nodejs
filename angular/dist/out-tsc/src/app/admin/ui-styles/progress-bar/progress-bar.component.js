import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProgressBarService } from '../../shared/_service/progress-bar.service';
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(service) {
        this.service = service;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ProgressBarComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.progressBars = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ProgressBarComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ProgressBarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-progress-bar',
            templateUrl: './progress-bar.component.html',
            styleUrls: ['./progress-bar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProgressBarService])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
//# sourceMappingURL=progress-bar.component.js.map