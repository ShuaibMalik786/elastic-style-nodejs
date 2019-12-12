import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../shared/_service/alert.service';
var EditAlertComponent = /** @class */ (function () {
    function EditAlertComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl("", Validators.required),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    EditAlertComponent.prototype.ngOnInit = function () {
        this.alertId = this.route.snapshot.paramMap.get("id");
        this.loadOne();
    };
    EditAlertComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.alertId).subscribe(function (success) {
            console.log(success);
            _this.alert = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditAlertComponent.prototype.initializeForm = function (alert) {
        this.form = new FormGroup({
            name: new FormControl(alert.name, Validators.required),
            css: new FormControl(alert.css, Validators.required),
            scss: new FormControl(alert.scss, Validators.required),
            html: new FormControl(alert.html, Validators.required)
        });
    };
    EditAlertComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.alertId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditAlertComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-alert',
            templateUrl: './edit-alert.component.html',
            styleUrls: ['./edit-alert.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService,
            ActivatedRoute])
    ], EditAlertComponent);
    return EditAlertComponent;
}());
export { EditAlertComponent };
//# sourceMappingURL=edit-alert.component.js.map