import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormsService } from '../../shared/_service/forms.service';
var FormsComponent = /** @class */ (function () {
    function FormsComponent(service) {
        this.service = service;
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    FormsComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.forms = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    FormsComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    FormsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrls: ['./forms.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormsService])
    ], FormsComponent);
    return FormsComponent;
}());
export { FormsComponent };
//# sourceMappingURL=forms.component.js.map