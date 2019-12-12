import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalService } from '../../shared/_service/modal.service';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(service) {
        this.service = service;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    ModalComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.modals = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ModalComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    ModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map