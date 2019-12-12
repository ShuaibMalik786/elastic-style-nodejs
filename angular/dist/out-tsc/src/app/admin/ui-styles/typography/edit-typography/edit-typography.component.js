import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TypographyService } from '../../../shared/_service/typography.service';
var EditTypographyComponent = /** @class */ (function () {
    function EditTypographyComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditTypographyComponent.prototype.ngOnInit = function () {
        this.typographyId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditTypographyComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.typographyId).subscribe(function (success) {
            console.log(success);
            _this.typography = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditTypographyComponent.prototype.initializeForm = function (typography) {
        this.form = new FormGroup({
            name: new FormControl(typography.name, Validators.required),
            css: new FormControl(typography.css, Validators.required),
            scss: new FormControl(typography.scss, Validators.required),
            html: new FormControl(typography.html, Validators.required)
        });
    };
    EditTypographyComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.typographyId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditTypographyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-typography',
            templateUrl: './edit-typography.component.html',
            styleUrls: ['./edit-typography.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TypographyService,
            ActivatedRoute])
    ], EditTypographyComponent);
    return EditTypographyComponent;
}());
export { EditTypographyComponent };
//# sourceMappingURL=edit-typography.component.js.map