import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverService } from 'src/app/admin/shared/_service/popover.service';
var AddPopoverComponent = /** @class */ (function () {
    function AddPopoverComponent(popoverService) {
        this.popoverService = popoverService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddPopoverComponent.prototype.ngOnInit = function () {
    };
    AddPopoverComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.popoverService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddPopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-popover',
            templateUrl: './add-popover.component.html',
            styleUrls: ['./add-popover.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverService])
    ], AddPopoverComponent);
    return AddPopoverComponent;
}());
export { AddPopoverComponent };
//# sourceMappingURL=add-popover.component.js.map