import * as tslib_1 from "tslib";
import { ButtonService } from './../../shared/_service/button.service';
import { Component } from '@angular/core';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(buttonService) {
        this.buttonService = buttonService;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        console.log('button component');
        this.loadButtons();
    };
    ButtonsComponent.prototype.loadButtons = function () {
        var _this = this;
        this.buttonService.getButtons().subscribe(function (success) {
            _this.buttons = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ButtonsComponent.prototype.deleteButton = function (id) {
        var _this = this;
        this.buttonService.removeButton(id).subscribe(function (success) {
            _this.loadButtons();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ButtonsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ButtonService])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map