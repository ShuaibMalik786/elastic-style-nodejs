import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TablesComponent } from './tables.component';
import { AddTablesComponent } from './add-tables/add-tables.component';
import { EditTablesComponent } from './edit-tables/edit-tables.component';
var routes = [
    {
        path: "",
        component: TablesComponent
    },
    {
        path: "add",
        component: AddTablesComponent
    },
    {
        path: "edit/:id",
        component: EditTablesComponent
    },
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
export { TablesRoutingModule };
//# sourceMappingURL=tables-routing.module.js.map