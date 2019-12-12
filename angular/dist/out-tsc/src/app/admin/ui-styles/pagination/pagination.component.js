import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PaginationService } from '../../shared/_service/pagination.service';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(service) {
        this.service = service;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    PaginationComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.paginations = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PaginationComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    PaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PaginationService])
    ], PaginationComponent);
    return PaginationComponent;
}());
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map