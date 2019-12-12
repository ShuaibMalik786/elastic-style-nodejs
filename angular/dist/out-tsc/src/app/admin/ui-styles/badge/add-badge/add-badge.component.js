import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BadgeService } from 'src/app/admin/shared/_service/badge.service';
var AddBadgeComponent = /** @class */ (function () {
    function AddBadgeComponent(badgeService) {
        this.badgeService = badgeService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddBadgeComponent.prototype.ngOnInit = function () {
    };
    AddBadgeComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.badgeService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddBadgeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-badge',
            templateUrl: './add-badge.component.html',
            styleUrls: ['./add-badge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BadgeService])
    ], AddBadgeComponent);
    return AddBadgeComponent;
}());
export { AddBadgeComponent };
//# sourceMappingURL=add-badge.component.js.map