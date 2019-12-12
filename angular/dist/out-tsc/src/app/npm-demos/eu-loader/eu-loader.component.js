import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EuLoaderService } from 'eu-loader';
var EuLoaderComponent = /** @class */ (function () {
    function EuLoaderComponent(euLoaderService) {
        this.euLoaderService = euLoaderService;
        this.options = {
            text: 'Hi, this is eu-popup text.',
            dismissOnClickOutside: false,
            spinnerColor: 'red',
            textColor: 'black'
        };
    }
    EuLoaderComponent.prototype.ngOnInit = function () {
    };
    EuLoaderComponent.prototype.openLoader = function () {
        var _this = this;
        this.euLoaderService.open({
            text: this.options.text,
            dismissOnClickOutside: this.options.dismissOnClickOutside,
            spinnerColor: this.options.spinnerColor,
            textColor: this.options.textColor,
        });
        setTimeout(function () {
            _this.euLoaderService.close();
        }, 2000);
    };
    EuLoaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-eu-loader',
            templateUrl: './eu-loader.component.html',
            styleUrls: ['./eu-loader.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EuLoaderService])
    ], EuLoaderComponent);
    return EuLoaderComponent;
}());
export { EuLoaderComponent };
//# sourceMappingURL=eu-loader.component.js.map