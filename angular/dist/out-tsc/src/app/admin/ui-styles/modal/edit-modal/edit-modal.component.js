import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../shared/_service/modal.service';
var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl(''),
            scss: new FormControl(''),
            html: new FormControl('', Validators.required)
        });
    }
    EditModalComponent.prototype.ngOnInit = function () {
        this.modalId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditModalComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.modalId).subscribe(function (success) {
            console.log(success);
            _this.modal = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditModalComponent.prototype.initializeForm = function (modal) {
        this.form = new FormGroup({
            name: new FormControl(modal.name, Validators.required),
            css: new FormControl(modal.css),
            scss: new FormControl(modal.scss),
            html: new FormControl(modal.html, Validators.required)
        });
    };
    EditModalComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        if (this.form.valid) {
            this.service
                .update(this.modalId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-modal',
            templateUrl: './edit-modal.component.html',
            styleUrls: ['./edit-modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService,
            ActivatedRoute])
    ], EditModalComponent);
    return EditModalComponent;
}());
export { EditModalComponent };
//# sourceMappingURL=edit-modal.component.js.map