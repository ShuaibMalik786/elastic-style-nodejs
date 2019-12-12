import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/admin/shared/_service/modal.service';
var AddModalComponent = /** @class */ (function () {
    function AddModalComponent(modalService) {
        this.modalService = modalService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddModalComponent.prototype.ngOnInit = function () {
    };
    AddModalComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.modalService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-modal',
            templateUrl: './add-modal.component.html',
            styleUrls: ['./add-modal.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService])
    ], AddModalComponent);
    return AddModalComponent;
}());
export { AddModalComponent };
//# sourceMappingURL=add-modal.component.js.map