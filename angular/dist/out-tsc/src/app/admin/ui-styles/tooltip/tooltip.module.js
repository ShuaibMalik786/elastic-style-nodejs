import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { AddTooltipComponent } from './add-tooltip/add-tooltip.component';
import { EditTooltipComponent } from './edit-tooltip/edit-tooltip.component';
import { ViewTooltipComponent } from './view-tooltip/view-tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipRoutingModule } from './tooltip-routing.module';
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = tslib_1.__decorate([
        NgModule({
            declarations: [TooltipComponent, AddTooltipComponent, EditTooltipComponent, ViewTooltipComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                TooltipRoutingModule
            ]
        })
    ], TooltipModule);
    return TooltipModule;
}());
export { TooltipModule };
//# sourceMappingURL=tooltip.module.js.map