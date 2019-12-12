import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BadgeComponent } from './badge.component';
import { AddBadgeComponent } from './add-badge/add-badge.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';
var routes = [
    {
        path: "",
        component: BadgeComponent
    },
    {
        path: "add",
        component: AddBadgeComponent
    },
    {
        path: "edit/:id",
        component: EditBadgeComponent
    },
];
var BadgeRoutingModule = /** @class */ (function () {
    function BadgeRoutingModule() {
    }
    BadgeRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], BadgeRoutingModule);
    return BadgeRoutingModule;
}());
export { BadgeRoutingModule };
//# sourceMappingURL=badge-routing.module.js.map