import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { EditAlertComponent } from './edit-alert/edit-alert.component';
var routes = [
    {
        path: '',
        component: AlertComponent
    },
    {
        path: 'add',
        component: AddAlertComponent
    },
    {
        path: 'edit/:id',
        component: EditAlertComponent
    }
];
var AlertRoutingModule = /** @class */ (function () {
    function AlertRoutingModule() {
    }
    AlertRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], AlertRoutingModule);
    return AlertRoutingModule;
}());
export { AlertRoutingModule };
//# sourceMappingURL=alert-routing.module.js.map