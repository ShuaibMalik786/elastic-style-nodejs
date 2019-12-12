import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EuPopupService } from 'eu-popup';
var EuPopupComponent = /** @class */ (function () {
    function EuPopupComponent(euPopupService) {
        this.euPopupService = euPopupService;
        this.options = {
            type: 'success',
            title: 'Title',
            text: 'Hi, this is eu-popup text.',
            cancelButtonText: 'CANCEL',
            confirmButtonText: 'OK',
            confirmButtonTextColor: 'black',
            cancelButtonTextColor: 'black',
            cancelButtonBgColor: 'white',
            confirmButtonBgColor: 'white',
            showCancelButton: true,
            dismissOnClickOutside: false,
        };
    }
    EuPopupComponent.prototype.ngOnInit = function () {
    };
    EuPopupComponent.prototype.openPopp = function () {
        this.euPopupService.open({
            type: this.options.type,
            title: this.options.title,
            text: this.options.text,
            showCancelButton: this.options.showCancelButton,
            cancelButtonText: this.options.cancelButtonText,
            confirmButtonText: this.options.confirmButtonText,
            dismissOnClickOutside: this.options.dismissOnClickOutside,
            confirmButtonTextColor: this.options.confirmButtonTextColor,
            cancelButtonTextColor: this.options.cancelButtonTextColor,
            cancelButtonBgColor: this.options.cancelButtonBgColor,
            confirmButtonBgColor: this.options.confirmButtonBgColor,
        });
    };
    EuPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-eu-popup',
            templateUrl: './eu-popup.component.html',
            styleUrls: ['./eu-popup.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EuPopupService])
    ], EuPopupComponent);
    return EuPopupComponent;
}());
export { EuPopupComponent };
//# sourceMappingURL=eu-popup.component.js.map