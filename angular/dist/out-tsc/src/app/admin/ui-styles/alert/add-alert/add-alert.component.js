import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/admin/shared/_service/alert.service';
var AddAlertComponent = /** @class */ (function () {
    function AddAlertComponent(alertService) {
        this.alertService = alertService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddAlertComponent.prototype.ngOnInit = function () {
    };
    AddAlertComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.alertService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddAlertComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-alert',
            templateUrl: './add-alert.component.html',
            styleUrls: ['./add-alert.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService])
    ], AddAlertComponent);
    return AddAlertComponent;
}());
export { AddAlertComponent };
//# sourceMappingURL=add-alert.component.js.map