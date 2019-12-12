import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TooltipComponent } from './tooltip.component';
import { AddTooltipComponent } from './add-tooltip/add-tooltip.component';
import { EditTooltipComponent } from './edit-tooltip/edit-tooltip.component';
var routes = [
    {
        path: "",
        component: TooltipComponent
    },
    {
        path: "add",
        component: AddTooltipComponent
    },
    {
        path: "edit/:id",
        component: EditTooltipComponent
    },
];
var TooltipRoutingModule = /** @class */ (function () {
    function TooltipRoutingModule() {
    }
    TooltipRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], TooltipRoutingModule);
    return TooltipRoutingModule;
}());
export { TooltipRoutingModule };
//# sourceMappingURL=tooltip-routing.module.js.map