import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PopoverComponent } from './popover.component';
import { AddPopoverComponent } from './add-popover/add-popover.component';
import { EditPopoverComponent } from './edit-popover/edit-popover.component';
var routes = [
    {
        path: "",
        component: PopoverComponent
    },
    {
        path: "add",
        component: AddPopoverComponent
    },
    {
        path: "edit/:id",
        component: EditPopoverComponent
    },
];
var PopoverRoutingModule = /** @class */ (function () {
    function PopoverRoutingModule() {
    }
    PopoverRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], PopoverRoutingModule);
    return PopoverRoutingModule;
}());
export { PopoverRoutingModule };
//# sourceMappingURL=popover-routing.module.js.map