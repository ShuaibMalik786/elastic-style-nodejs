import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TypographyComponent } from './typography.component';
import { AddTypographyComponent } from './add-typography/add-typography.component';
import { EditTypographyComponent } from './edit-typography/edit-typography.component';
var routes = [
    {
        path: "",
        component: TypographyComponent
    },
    {
        path: "add",
        component: AddTypographyComponent
    },
    {
        path: "edit/:id",
        component: EditTypographyComponent
    },
];
var TypographyRoutingModule = /** @class */ (function () {
    function TypographyRoutingModule() {
    }
    TypographyRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], TypographyRoutingModule);
    return TypographyRoutingModule;
}());
export { TypographyRoutingModule };
//# sourceMappingURL=typography-routing.module.js.map