import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import { AddTypographyComponent } from './add-typography/add-typography.component';
import { EditTypographyComponent } from './edit-typography/edit-typography.component';
import { ViewTypographyComponent } from './view-typography/view-typography.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypographyRoutingModule } from './typography-routing.module';
var TypographyModule = /** @class */ (function () {
    function TypographyModule() {
    }
    TypographyModule = tslib_1.__decorate([
        NgModule({
            declarations: [TypographyComponent, AddTypographyComponent, EditTypographyComponent, ViewTypographyComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                TypographyRoutingModule
            ]
        })
    ], TypographyModule);
    return TypographyModule;
}());
export { TypographyModule };
//# sourceMappingURL=typography.module.js.map