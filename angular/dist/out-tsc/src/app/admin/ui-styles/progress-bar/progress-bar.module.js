import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { AddProgressbarComponent } from './add-progressbar/add-progressbar.component';
import { EditProgressbarComponent } from './edit-progressbar/edit-progressbar.component';
import { ViewProgressbarComponent } from './view-progressbar/view-progressbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressbarRoutingModule } from './progressBar-routing.module';
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = tslib_1.__decorate([
        NgModule({
            declarations: [ProgressBarComponent, AddProgressbarComponent, EditProgressbarComponent, ViewProgressbarComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                ProgressbarRoutingModule
            ]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());
export { ProgressBarModule };
//# sourceMappingURL=progress-bar.module.js.map