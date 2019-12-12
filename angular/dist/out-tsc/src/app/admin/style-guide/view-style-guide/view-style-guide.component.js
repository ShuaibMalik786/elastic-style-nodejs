import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StyleGuideService } from '../../shared/_service/style-guide.service';
var ViewStyleGuideComponent = /** @class */ (function () {
    function ViewStyleGuideComponent(styleGuideService, route) {
        this.styleGuideService = styleGuideService;
        this.route = route;
    }
    ViewStyleGuideComponent.prototype.ngOnInit = function () {
        this.styleGuideId = this.route.snapshot.paramMap.get("id");
        this.loadTab();
    };
    ViewStyleGuideComponent.prototype.loadTab = function () {
        var _this = this;
        this.styleGuideService.getOne(this.styleGuideId).subscribe(function (success) {
            console.log(success);
            _this.styleGuide = success;
        }, function (fail) {
            console.log(fail);
        });
    };
    ViewStyleGuideComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-style-guide',
            templateUrl: './view-style-guide.component.html',
            styleUrls: ['./view-style-guide.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideService,
            ActivatedRoute])
    ], ViewStyleGuideComponent);
    return ViewStyleGuideComponent;
}());
export { ViewStyleGuideComponent };
//# sourceMappingURL=view-style-guide.component.js.map