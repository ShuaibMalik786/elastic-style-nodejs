import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';
import { EditNavbarComponent } from './edit-navbar/edit-navbar.component';
var routes = [
    {
        path: "",
        component: NavbarComponent
    },
    {
        path: "add",
        component: AddNavbarComponent
    },
    {
        path: "edit/:id",
        component: EditNavbarComponent
    },
];
var NavbarRoutingModule = /** @class */ (function () {
    function NavbarRoutingModule() {
    }
    NavbarRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], NavbarRoutingModule);
    return NavbarRoutingModule;
}());
export { NavbarRoutingModule };
//# sourceMappingURL=navbar-routing.module.js.map