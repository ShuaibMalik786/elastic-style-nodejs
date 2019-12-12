import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavbarService } from '../../shared/_service/navbar.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(service) {
        this.service = service;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    NavbarComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.navbars = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    NavbarComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavbarService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map