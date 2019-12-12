import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { AddPaginationComponent } from './add-pagination/add-pagination.component';
import { EditPaginationComponent } from './edit-pagination/edit-pagination.component';
import { ViewPaginationComponent } from './view-pagination/view-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationRoutingModule } from './pagination-routing.module';
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = tslib_1.__decorate([
        NgModule({
            declarations: [PaginationComponent, AddPaginationComponent, EditPaginationComponent, ViewPaginationComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                PaginationRoutingModule
            ]
        })
    ], PaginationModule);
    return PaginationModule;
}());
export { PaginationModule };
//# sourceMappingURL=pagination.module.js.map