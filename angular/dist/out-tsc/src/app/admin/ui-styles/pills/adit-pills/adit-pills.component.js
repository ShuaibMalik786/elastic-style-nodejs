import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PillsService } from '../../../shared/_service/pills.service';
var AditPillsComponent = /** @class */ (function () {
    function AditPillsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    AditPillsComponent.prototype.ngOnInit = function () {
        this.pillId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    AditPillsComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.pillId).subscribe(function (success) {
            console.log(success);
            _this.pill = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    AditPillsComponent.prototype.initializeForm = function (pill) {
        this.form = new FormGroup({
            name: new FormControl(pill.name, Validators.required),
            css: new FormControl(pill.css, Validators.required),
            scss: new FormControl(pill.scss, Validators.required),
            html: new FormControl(pill.html, Validators.required)
        });
    };
    AditPillsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.pillId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AditPillsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-adit-pills',
            templateUrl: './adit-pills.component.html',
            styleUrls: ['./adit-pills.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PillsService,
            ActivatedRoute])
    ], AditPillsComponent);
    return AditPillsComponent;
}());
export { AditPillsComponent };
//# sourceMappingURL=adit-pills.component.js.map