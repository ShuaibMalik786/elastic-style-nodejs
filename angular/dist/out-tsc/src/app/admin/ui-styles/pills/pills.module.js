import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsComponent } from './pills.component';
import { AddPillsComponent } from './add-pills/add-pills.component';
import { AditPillsComponent } from './adit-pills/adit-pills.component';
import { ViewPillsComponent } from './view-pills/view-pills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PillsRoutingModule } from './pills-routing.module';
var PillsModule = /** @class */ (function () {
    function PillsModule() {
    }
    PillsModule = tslib_1.__decorate([
        NgModule({
            declarations: [PillsComponent, AddPillsComponent, AditPillsComponent, ViewPillsComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                PillsRoutingModule
            ]
        })
    ], PillsModule);
    return PillsModule;
}());
export { PillsModule };
//# sourceMappingURL=pills.module.js.map