import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        console.log('layout component');
    };
    LayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map