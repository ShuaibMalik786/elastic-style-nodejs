import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../../../shared/_service/forms.service';
var EditFormsComponent = /** @class */ (function () {
    function EditFormsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl("", Validators.required),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    EditFormsComponent.prototype.ngOnInit = function () {
        this.formId = this.route.snapshot.paramMap.get("id");
        this.loadOne();
    };
    EditFormsComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.formId).subscribe(function (success) {
            console.log(success);
            _this.formComponent = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditFormsComponent.prototype.initializeForm = function (form) {
        this.form = new FormGroup({
            name: new FormControl(form.name, Validators.required),
            css: new FormControl(form.css, Validators.required),
            scss: new FormControl(form.scss, Validators.required),
            html: new FormControl(form.html, Validators.required)
        });
    };
    EditFormsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.formId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditFormsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-forms',
            templateUrl: './edit-forms.component.html',
            styleUrls: ['./edit-forms.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormsService,
            ActivatedRoute])
    ], EditFormsComponent);
    return EditFormsComponent;
}());
export { EditFormsComponent };
//# sourceMappingURL=edit-forms.component.js.map