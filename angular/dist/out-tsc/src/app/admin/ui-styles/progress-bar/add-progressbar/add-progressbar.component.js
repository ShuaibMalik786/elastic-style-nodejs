import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgressBarService } from 'src/app/admin/shared/_service/progress-bar.service';
var AddProgressbarComponent = /** @class */ (function () {
    function AddProgressbarComponent(progressBarService) {
        this.progressBarService = progressBarService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddProgressbarComponent.prototype.ngOnInit = function () {
    };
    AddProgressbarComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.progressBarService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddProgressbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-progressbar',
            templateUrl: './add-progressbar.component.html',
            styleUrls: ['./add-progressbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProgressBarService])
    ], AddProgressbarComponent);
    return AddProgressbarComponent;
}());
export { AddProgressbarComponent };
//# sourceMappingURL=add-progressbar.component.js.map