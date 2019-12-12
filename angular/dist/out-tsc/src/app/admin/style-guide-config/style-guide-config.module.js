import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { StyleGuideConfigRoutingModule } from './style-guide-config-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var StyleGuideConfigModule = /** @class */ (function () {
    function StyleGuideConfigModule() {
    }
    StyleGuideConfigModule = tslib_1.__decorate([
        NgModule({
            declarations: [ViewComponent, ListComponent, AddComponent, EditComponent],
            imports: [
                CommonModule,
                StyleGuideConfigRoutingModule,
                ReactiveFormsModule,
                FormsModule,
            ]
        })
    ], StyleGuideConfigModule);
    return StyleGuideConfigModule;
}());
export { StyleGuideConfigModule };
//# sourceMappingURL=style-guide-config.module.js.map