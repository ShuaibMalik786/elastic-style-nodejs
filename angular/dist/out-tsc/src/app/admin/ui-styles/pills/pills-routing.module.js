import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PillsComponent } from './pills.component';
import { AddPillsComponent } from './add-pills/add-pills.component';
import { AditPillsComponent } from './adit-pills/adit-pills.component';
var routes = [
    {
        path: "",
        component: PillsComponent
    },
    {
        path: "add",
        component: AddPillsComponent
    },
    {
        path: "edit/:id",
        component: AditPillsComponent
    },
];
var PillsRoutingModule = /** @class */ (function () {
    function PillsRoutingModule() {
    }
    PillsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], PillsRoutingModule);
    return PillsRoutingModule;
}());
export { PillsRoutingModule };
//# sourceMappingURL=pills-routing.module.js.map