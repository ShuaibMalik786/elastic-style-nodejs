import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron.component';
import { AddJumbotronComponent } from './add-jumbotron/add-jumbotron.component';
import { EditJumbotronComponent } from './edit-jumbotron/edit-jumbotron.component';
import { ViewJumbotronComponent } from './view-jumbotron/view-jumbotron.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JumbotronRoutingModule } from './jumbotron-routing.module';
var JumbotronModule = /** @class */ (function () {
    function JumbotronModule() {
    }
    JumbotronModule = tslib_1.__decorate([
        NgModule({
            declarations: [JumbotronComponent, AddJumbotronComponent, EditJumbotronComponent, ViewJumbotronComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                JumbotronRoutingModule
            ]
        })
    ], JumbotronModule);
    return JumbotronModule;
}());
export { JumbotronModule };
//# sourceMappingURL=jumbotron.module.js.map