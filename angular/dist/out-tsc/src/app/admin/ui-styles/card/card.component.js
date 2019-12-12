import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CardService } from '../../shared/_service/card.service';
var CardComponent = /** @class */ (function () {
    function CardComponent(service) {
        this.service = service;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    CardComponent.prototype.loadAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.cards = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    CardComponent.prototype.remove = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (success) {
            _this.loadAll();
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    CardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CardService])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map