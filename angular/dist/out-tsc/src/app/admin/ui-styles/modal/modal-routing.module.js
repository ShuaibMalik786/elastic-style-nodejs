import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModalComponent } from './modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
var routes = [
    {
        path: "",
        component: ModalComponent
    },
    {
        path: "add",
        component: AddModalComponent
    },
    {
        path: "edit/:id",
        component: EditModalComponent
    },
];
var ModalRoutingModule = /** @class */ (function () {
    function ModalRoutingModule() {
    }
    ModalRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], ModalRoutingModule);
    return ModalRoutingModule;
}());
export { ModalRoutingModule };
//# sourceMappingURL=modal-routing.module.js.map