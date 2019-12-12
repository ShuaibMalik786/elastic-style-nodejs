import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StyleGuideConfigService } from '../../shared/_service/style-guide-config.service';
import { ActivatedRoute } from '@angular/router';
var ViewComponent = /** @class */ (function () {
    function ViewComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.configId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    ViewComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.configId).subscribe(function (success) {
            console.log(success);
            _this.config = success;
        }, function (fail) {
            console.log(fail);
        });
    };
    ViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideConfigService,
            ActivatedRoute])
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=view.component.js.map