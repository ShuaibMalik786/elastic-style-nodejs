import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TabsComponent } from './tabs.component';
import { AddTabsComponent } from './add-tabs/add-tabs.component';
import { EditTabsComponent } from './edit-tabs/edit-tabs.component';
var routes = [
    {
        path: "",
        component: TabsComponent
    },
    {
        path: "add",
        component: AddTabsComponent
    },
    {
        path: "edit/:id",
        component: EditTabsComponent
    },
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
export { TabsRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map