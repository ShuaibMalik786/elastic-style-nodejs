import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PillsService } from 'src/app/admin/shared/_service/pills.service';
var AddPillsComponent = /** @class */ (function () {
    function AddPillsComponent(pillsService) {
        this.pillsService = pillsService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddPillsComponent.prototype.ngOnInit = function () {
    };
    AddPillsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.pillsService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddPillsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-pills',
            templateUrl: './add-pills.component.html',
            styleUrls: ['./add-pills.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PillsService])
    ], AddPillsComponent);
    return AddPillsComponent;
}());
export { AddPillsComponent };
//# sourceMappingURL=add-pills.component.js.map