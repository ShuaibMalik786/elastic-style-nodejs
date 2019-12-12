import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../../shared/_service/card.service';
var EditCardComponent = /** @class */ (function () {
    function EditCardComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditCardComponent.prototype.ngOnInit = function () {
        this.cardId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditCardComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.cardId).subscribe(function (success) {
            console.log(success);
            _this.card = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditCardComponent.prototype.initializeForm = function (card) {
        this.form = new FormGroup({
            name: new FormControl(card.name, Validators.required),
            css: new FormControl(card.css, Validators.required),
            scss: new FormControl(card.scss, Validators.required),
            html: new FormControl(card.html, Validators.required)
        });
    };
    EditCardComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.cardId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditCardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-card',
            templateUrl: './edit-card.component.html',
            styleUrls: ['./edit-card.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CardService,
            ActivatedRoute])
    ], EditCardComponent);
    return EditCardComponent;
}());
export { EditCardComponent };
//# sourceMappingURL=edit-card.component.js.map