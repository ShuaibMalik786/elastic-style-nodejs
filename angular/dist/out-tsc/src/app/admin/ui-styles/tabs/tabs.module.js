import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { AddTabsComponent } from './add-tabs/add-tabs.component';
import { EditTabsComponent } from './edit-tabs/edit-tabs.component';
import { ViewTabsComponent } from './view-tabs/view-tabs.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabsService } from '../../shared/_service/tabs.service';
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib_1.__decorate([
        NgModule({
            declarations: [TabsComponent, AddTabsComponent, EditTabsComponent, ViewTabsComponent],
            imports: [
                CommonModule,
                TabsRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                TabsService
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map