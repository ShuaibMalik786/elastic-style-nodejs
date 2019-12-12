import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TablesService } from '../../shared/_service/tables.service';
var TablesComponent = /** @class */ (function () {
    function TablesComponent(service) {
        this.service = service;
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    TablesComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.tables = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TablesComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TablesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tables',
            templateUrl: './tables.component.html',
            styleUrls: ['./tables.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TablesService])
    ], TablesComponent);
    return TablesComponent;
}());
export { TablesComponent };
//# sourceMappingURL=tables.component.js.map