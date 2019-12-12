import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProgressBarComponent } from './progress-bar.component';
import { AddProgressbarComponent } from './add-progressbar/add-progressbar.component';
import { EditProgressbarComponent } from './edit-progressbar/edit-progressbar.component';
var routes = [
    {
        path: "",
        component: ProgressBarComponent
    },
    {
        path: "add",
        component: AddProgressbarComponent
    },
    {
        path: "edit/:id",
        component: EditProgressbarComponent
    }
];
var ProgressbarRoutingModule = /** @class */ (function () {
    function ProgressbarRoutingModule() {
    }
    ProgressbarRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], ProgressbarRoutingModule);
    return ProgressbarRoutingModule;
}());
export { ProgressbarRoutingModule };
//# sourceMappingURL=progressBar-routing.module.js.map