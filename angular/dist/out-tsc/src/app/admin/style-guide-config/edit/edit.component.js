import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StyleGuideConfigService } from '../../shared/_service/style-guide-config.service';
var EditComponent = /** @class */ (function () {
    function EditComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            primaryColor: new FormControl('', Validators.required),
            secondaryColor: new FormControl('', Validators.required),
            successColor: new FormControl('', Validators.required),
            infoColor: new FormControl('', Validators.required),
            warningColor: new FormControl('', Validators.required),
            dangerColor: new FormControl('', Validators.required),
            darkColor: new FormControl('', Validators.required),
            lightColor: new FormControl('', Validators.required),
            primaryGradientColor: new FormControl('', Validators.required),
            secondaryGradientColor: new FormControl('', Validators.required),
            successGradientColor: new FormControl('', Validators.required),
            infoGradientColor: new FormControl('', Validators.required),
            warningGradientColor: new FormControl('', Validators.required),
            dangerGradientColor: new FormControl('', Validators.required),
            darkGradientColor: new FormControl('', Validators.required),
            lightGradientColor: new FormControl('', Validators.required),
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        this.configId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.configId).subscribe(function (success) {
            console.log(success);
            _this.config = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditComponent.prototype.initializeForm = function (alert) {
        this.form = new FormGroup({
            name: new FormControl(this.config.name, Validators.required),
            primaryColor: new FormControl(this.config.primaryColor, Validators.required),
            secondaryColor: new FormControl(this.config.secondaryColor),
            successColor: new FormControl(this.config.successColor, Validators.required),
            infoColor: new FormControl(this.config.infoColor, Validators.required),
            warningColor: new FormControl(this.config.warningColor, Validators.required),
            dangerColor: new FormControl(this.config.dangerColor),
            darkColor: new FormControl(this.config.darkColor, Validators.required),
            lightColor: new FormControl(this.config.lightColor, Validators.required),
            primaryGradientColor: new FormControl(this.config.primaryGradientColor, Validators.required),
            secondaryGradientColor: new FormControl(this.config.secondaryGradientColor),
            successGradientColor: new FormControl(this.config.successGradientColor, Validators.required),
            infoGradientColor: new FormControl(this.config.infoGradientColor, Validators.required),
            warningGradientColor: new FormControl(this.config.warningGradientColor, Validators.required),
            dangerGradientColor: new FormControl(this.config.dangerGradientColor),
            darkGradientColor: new FormControl(this.config.darkGradientColor, Validators.required),
            lightGradientColor: new FormControl(this.config.lightGradientColor, Validators.required),
        });
    };
    EditComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.configId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideConfigService,
            ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map