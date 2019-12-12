import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map