import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TooltipService } from 'src/app/admin/shared/_service/tooltip.service';
var AddTooltipComponent = /** @class */ (function () {
    function AddTooltipComponent(tooltipService) {
        this.tooltipService = tooltipService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddTooltipComponent.prototype.ngOnInit = function () {
    };
    AddTooltipComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.tooltipService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddTooltipComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-tooltip',
            templateUrl: './add-tooltip.component.html',
            styleUrls: ['./add-tooltip.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TooltipService])
    ], AddTooltipComponent);
    return AddTooltipComponent;
}());
export { AddTooltipComponent };
//# sourceMappingURL=add-tooltip.component.js.map