import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from './pagination.component';
import { AddPaginationComponent } from './add-pagination/add-pagination.component';
import { EditPaginationComponent } from './edit-pagination/edit-pagination.component';
var routes = [
    {
        path: "",
        component: PaginationComponent
    },
    {
        path: "add",
        component: AddPaginationComponent
    },
    {
        path: "edit/:id",
        component: EditPaginationComponent
    },
];
var PaginationRoutingModule = /** @class */ (function () {
    function PaginationRoutingModule() {
    }
    PaginationRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], PaginationRoutingModule);
    return PaginationRoutingModule;
}());
export { PaginationRoutingModule };
//# sourceMappingURL=pagination-routing.module.js.map