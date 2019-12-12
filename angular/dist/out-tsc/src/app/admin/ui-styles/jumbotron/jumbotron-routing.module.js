import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { JumbotronComponent } from './jumbotron.component';
import { AddJumbotronComponent } from './add-jumbotron/add-jumbotron.component';
import { EditJumbotronComponent } from './edit-jumbotron/edit-jumbotron.component';
var routes = [
    {
        path: "",
        component: JumbotronComponent
    },
    {
        path: "add",
        component: AddJumbotronComponent
    },
    {
        path: "edit/:id",
        component: EditJumbotronComponent
    },
];
var JumbotronRoutingModule = /** @class */ (function () {
    function JumbotronRoutingModule() {
    }
    JumbotronRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], JumbotronRoutingModule);
    return JumbotronRoutingModule;
}());
export { JumbotronRoutingModule };
//# sourceMappingURL=jumbotron-routing.module.js.map