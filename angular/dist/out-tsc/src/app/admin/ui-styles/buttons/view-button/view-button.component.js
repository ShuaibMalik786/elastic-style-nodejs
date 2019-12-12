import * as tslib_1 from "tslib";
import { ButtonService } from './../../../shared/_service/button.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
var ViewButtonComponent = /** @class */ (function () {
    function ViewButtonComponent(buttonService, route) {
        this.buttonService = buttonService;
        this.route = route;
    }
    ViewButtonComponent.prototype.ngOnInit = function () {
        this.buttonId = this.route.snapshot.paramMap.get("id");
        this.loadButtons();
    };
    ViewButtonComponent.prototype.loadButtons = function () {
        var _this = this;
        this.buttonService.getButton(this.buttonId).subscribe(function (success) {
            console.log(success);
            _this.button = success;
        }, function (fail) {
            console.log(fail);
        });
    };
    ViewButtonComponent = tslib_1.__decorate([
        Component({
            selector: "app-view-button",
            templateUrl: "./view-button.component.html",
            styleUrls: ["./view-button.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ButtonService,
            ActivatedRoute])
    ], ViewButtonComponent);
    return ViewButtonComponent;
}());
export { ViewButtonComponent };
//# sourceMappingURL=view-button.component.js.map