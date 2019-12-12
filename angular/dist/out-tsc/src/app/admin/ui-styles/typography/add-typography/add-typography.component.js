import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypographyService } from 'src/app/admin/shared/_service/typography.service';
var AddTypographyComponent = /** @class */ (function () {
    function AddTypographyComponent(typographyService) {
        this.typographyService = typographyService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddTypographyComponent.prototype.ngOnInit = function () {
    };
    AddTypographyComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.typographyService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddTypographyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-typography',
            templateUrl: './add-typography.component.html',
            styleUrls: ['./add-typography.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TypographyService])
    ], AddTypographyComponent);
    return AddTypographyComponent;
}());
export { AddTypographyComponent };
//# sourceMappingURL=add-typography.component.js.map