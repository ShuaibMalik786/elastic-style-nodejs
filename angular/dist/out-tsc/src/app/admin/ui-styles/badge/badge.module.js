import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { AddBadgeComponent } from './add-badge/add-badge.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';
import { ViewBadgeComponent } from './view-badge/view-badge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeRoutingModule } from './badge-routing.module';
var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule = tslib_1.__decorate([
        NgModule({
            declarations: [BadgeComponent, AddBadgeComponent, EditBadgeComponent, ViewBadgeComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                FormsModule,
                ReactiveFormsModule,
                BadgeRoutingModule
            ]
        })
    ], BadgeModule);
    return BadgeModule;
}());
export { BadgeModule };
//# sourceMappingURL=badge.module.js.map