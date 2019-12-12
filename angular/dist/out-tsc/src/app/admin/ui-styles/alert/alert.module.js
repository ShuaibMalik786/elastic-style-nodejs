import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { EditAlertComponent } from './edit-alert/edit-alert.component';
import { ViewAlertComponent } from './view-alert/view-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertRoutingModule } from './alert-routing.module';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = tslib_1.__decorate([
        NgModule({
            declarations: [AlertComponent, AddAlertComponent, EditAlertComponent, ViewAlertComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                FormsModule,
                ReactiveFormsModule,
                AlertRoutingModule
            ]
        })
    ], AlertModule);
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=alert.module.js.map