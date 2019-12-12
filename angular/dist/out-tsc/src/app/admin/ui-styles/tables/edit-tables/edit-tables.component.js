import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TablesService } from '../../../shared/_service/tables.service';
var EditTablesComponent = /** @class */ (function () {
    function EditTablesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditTablesComponent.prototype.ngOnInit = function () {
        this.tableId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditTablesComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.tableId).subscribe(function (success) {
            console.log(success);
            _this.table = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditTablesComponent.prototype.initializeForm = function (table) {
        this.form = new FormGroup({
            name: new FormControl(table.name, Validators.required),
            css: new FormControl(table.css, Validators.required),
            scss: new FormControl(table.scss, Validators.required),
            html: new FormControl(table.html, Validators.required)
        });
    };
    EditTablesComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.tableId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditTablesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-tables',
            templateUrl: './edit-tables.component.html',
            styleUrls: ['./edit-tables.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TablesService,
            ActivatedRoute])
    ], EditTablesComponent);
    return EditTablesComponent;
}());
export { EditTablesComponent };
//# sourceMappingURL=edit-tables.component.js.map