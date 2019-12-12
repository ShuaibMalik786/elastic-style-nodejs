import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PopoverService } from '../../../shared/_service/popover.service';
var EditPopoverComponent = /** @class */ (function () {
    function EditPopoverComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditPopoverComponent.prototype.ngOnInit = function () {
        this.popoverId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditPopoverComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.popoverId).subscribe(function (success) {
            console.log(success);
            _this.popover = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditPopoverComponent.prototype.initializeForm = function (popover) {
        this.form = new FormGroup({
            name: new FormControl(popover.name, Validators.required),
            css: new FormControl(popover.css, Validators.required),
            scss: new FormControl(popover.scss, Validators.required),
            html: new FormControl(popover.html, Validators.required)
        });
    };
    EditPopoverComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.popoverId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditPopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-popover',
            templateUrl: './edit-popover.component.html',
            styleUrls: ['./edit-popover.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverService,
            ActivatedRoute])
    ], EditPopoverComponent);
    return EditPopoverComponent;
}());
export { EditPopoverComponent };
//# sourceMappingURL=edit-popover.component.js.map