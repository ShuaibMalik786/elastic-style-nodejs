import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TabsService } from '../../shared/_service/tabs.service';
var TabsComponent = /** @class */ (function () {
    function TabsComponent(tabsService) {
        this.tabsService = tabsService;
    }
    TabsComponent.prototype.ngOnInit = function () {
        console.log('tabs');
        this.loadAll();
    };
    TabsComponent.prototype.loadAll = function () {
        var _this = this;
        this.tabsService.getAll().subscribe(function (success) {
            _this.tabs = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TabsComponent.prototype.delete = function (id) {
        var _this = this;
        this.tabsService.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    TabsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TabsService])
    ], TabsComponent);
    return TabsComponent;
}());
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map