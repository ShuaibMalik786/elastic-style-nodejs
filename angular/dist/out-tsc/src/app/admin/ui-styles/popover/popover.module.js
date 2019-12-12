import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { AddPopoverComponent } from './add-popover/add-popover.component';
import { EditPopoverComponent } from './edit-popover/edit-popover.component';
import { ViewPopoverComponent } from './view-popover/view-popover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverRoutingModule } from './popover-routing.module';
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = tslib_1.__decorate([
        NgModule({
            declarations: [PopoverComponent, AddPopoverComponent, EditPopoverComponent, ViewPopoverComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                PopoverRoutingModule
            ]
        })
    ], PopoverModule);
    return PopoverModule;
}());
export { PopoverModule };
//# sourceMappingURL=popover.module.js.map