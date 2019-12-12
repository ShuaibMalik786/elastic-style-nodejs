import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaginationService } from 'src/app/admin/shared/_service/pagination.service';
var AddPaginationComponent = /** @class */ (function () {
    function AddPaginationComponent(paginationService) {
        this.paginationService = paginationService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddPaginationComponent.prototype.ngOnInit = function () {
    };
    AddPaginationComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.paginationService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddPaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-pagination',
            templateUrl: './add-pagination.component.html',
            styleUrls: ['./add-pagination.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PaginationService])
    ], AddPaginationComponent);
    return AddPaginationComponent;
}());
export { AddPaginationComponent };
//# sourceMappingURL=add-pagination.component.js.map