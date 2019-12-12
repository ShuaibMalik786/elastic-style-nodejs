import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRoutingModule } from './modal-routing.module';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib_1.__decorate([
        NgModule({
            declarations: [ModalComponent, AddModalComponent, EditModalComponent, ViewModalComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                ModalRoutingModule
            ]
        })
    ], ModalModule);
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=modal.module.js.map