import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsComponent } from './forms.component';
import { AddFormsComponent } from './add-forms/add-forms.component';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
var routes = [
    {
        path: "",
        component: FormsComponent
    },
    {
        path: "add",
        component: AddFormsComponent
    },
    {
        path: "edit/:id",
        component: EditFormsComponent
    },
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
export { FormsRoutingModule };
//# sourceMappingURL=form-routing.module.js.map