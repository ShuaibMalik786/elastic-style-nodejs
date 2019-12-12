import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/admin/shared/_service/forms.service';
var AddFormsComponent = /** @class */ (function () {
    function AddFormsComponent(formsService) {
        this.formsService = formsService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddFormsComponent.prototype.ngOnInit = function () {
    };
    AddFormsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.formsService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddFormsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-forms',
            templateUrl: './add-forms.component.html',
            styleUrls: ['./add-forms.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormsService])
    ], AddFormsComponent);
    return AddFormsComponent;
}());
export { AddFormsComponent };
//# sourceMappingURL=add-forms.component.js.map