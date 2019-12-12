import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from 'src/app/admin/shared/_service/card.service';
var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(cardService) {
        this.cardService = cardService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddCardComponent.prototype.ngOnInit = function () {
    };
    AddCardComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.cardService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddCardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-card',
            templateUrl: './add-card.component.html',
            styleUrls: ['./add-card.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CardService])
    ], AddCardComponent);
    return AddCardComponent;
}());
export { AddCardComponent };
//# sourceMappingURL=add-card.component.js.map