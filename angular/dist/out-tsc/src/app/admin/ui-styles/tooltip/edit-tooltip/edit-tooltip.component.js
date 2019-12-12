import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TooltipService } from '../../../shared/_service/tooltip.service';
var EditTooltipComponent = /** @class */ (function () {
    function EditTooltipComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditTooltipComponent.prototype.ngOnInit = function () {
        this.tooltipId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditTooltipComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.tooltipId).subscribe(function (success) {
            console.log(success);
            _this.tooltip = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditTooltipComponent.prototype.initializeForm = function (tooltip) {
        this.form = new FormGroup({
            name: new FormControl(tooltip.name, Validators.required),
            css: new FormControl(tooltip.css, Validators.required),
            scss: new FormControl(tooltip.scss, Validators.required),
            html: new FormControl(tooltip.html, Validators.required)
        });
    };
    EditTooltipComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.tooltipId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditTooltipComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-tooltip',
            templateUrl: './edit-tooltip.component.html',
            styleUrls: ['./edit-tooltip.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TooltipService,
            ActivatedRoute])
    ], EditTooltipComponent);
    return EditTooltipComponent;
}());
export { EditTooltipComponent };
//# sourceMappingURL=edit-tooltip.component.js.map