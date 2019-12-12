import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { JumbotronService } from '../../shared/_service/jumbotron.service';
var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent(service) {
        this.service = service;
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    JumbotronComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.jumbotrons = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    JumbotronComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    JumbotronComponent = tslib_1.__decorate([
        Component({
            selector: 'app-jumbotron',
            templateUrl: './jumbotron.component.html',
            styleUrls: ['./jumbotron.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [JumbotronService])
    ], JumbotronComponent);
    return JumbotronComponent;
}());
export { JumbotronComponent };
//# sourceMappingURL=jumbotron.component.js.map