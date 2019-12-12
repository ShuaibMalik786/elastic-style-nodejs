import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TablesService } from 'src/app/admin/shared/_service/tables.service';
var AddTablesComponent = /** @class */ (function () {
    function AddTablesComponent(tablesService) {
        this.tablesService = tablesService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddTablesComponent.prototype.ngOnInit = function () {
    };
    AddTablesComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.tablesService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddTablesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-tables',
            templateUrl: './add-tables.component.html',
            styleUrls: ['./add-tables.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TablesService])
    ], AddTablesComponent);
    return AddTablesComponent;
}());
export { AddTablesComponent };
//# sourceMappingURL=add-tables.component.js.map