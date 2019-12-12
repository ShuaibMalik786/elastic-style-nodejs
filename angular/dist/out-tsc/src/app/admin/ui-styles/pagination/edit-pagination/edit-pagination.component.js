import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../../../shared/_service/pagination.service';
var EditPaginationComponent = /** @class */ (function () {
    function EditPaginationComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditPaginationComponent.prototype.ngOnInit = function () {
        this.paginationId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditPaginationComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.paginationId).subscribe(function (success) {
            console.log(success);
            _this.pagination = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditPaginationComponent.prototype.initializeForm = function (pagination) {
        this.form = new FormGroup({
            name: new FormControl(pagination.name, Validators.required),
            css: new FormControl(pagination.css, Validators.required),
            scss: new FormControl(pagination.scss, Validators.required),
            html: new FormControl(pagination.html, Validators.required)
        });
    };
    EditPaginationComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.paginationId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditPaginationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-pagination',
            templateUrl: './edit-pagination.component.html',
            styleUrls: ['./edit-pagination.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PaginationService,
            ActivatedRoute])
    ], EditPaginationComponent);
    return EditPaginationComponent;
}());
export { EditPaginationComponent };
//# sourceMappingURL=edit-pagination.component.js.map