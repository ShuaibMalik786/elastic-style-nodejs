import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StyleGuideConfigService } from '../../shared/_service/style-guide-config.service';
var AddComponent = /** @class */ (function () {
    function AddComponent(service) {
        this.service = service;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            primaryColor: new FormControl("", Validators.required),
            secondaryColor: new FormControl(""),
            successColor: new FormControl("", Validators.required),
            infoColor: new FormControl("", Validators.required),
            warningColor: new FormControl("", Validators.required),
            dangerColor: new FormControl(""),
            darkColor: new FormControl("", Validators.required),
            lightColor: new FormControl("", Validators.required),
            primaryGradientColor: new FormControl("", Validators.required),
            secondaryGradientColor: new FormControl(""),
            successGradientColor: new FormControl("", Validators.required),
            infoGradientColor: new FormControl("", Validators.required),
            warningGradientColor: new FormControl("", Validators.required),
            dangerGradientColor: new FormControl(""),
            darkGradientColor: new FormControl("", Validators.required),
            lightGradientColor: new FormControl("", Validators.required),
        });
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        if (this.form.valid) {
            this.service.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideConfigService])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=add.component.js.map