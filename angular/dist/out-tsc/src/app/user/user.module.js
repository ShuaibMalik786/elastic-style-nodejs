import * as tslib_1 from "tslib";
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/_component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { UserPreviewComponent } from './shared/_component/preview/preview.component';
import { Ng5SliderModule } from 'ng5-slider';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserComponent,
                StyleGuideComponent,
                HomeComponent,
                LayoutComponent,
                HeaderComponent,
                UserPreviewComponent
            ],
            exports: [
                HeaderComponent
            ],
            imports: [
                CommonModule,
                UserRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                Ng5SliderModule,
                ColorPickerModule
            ]
        })
    ], UserModule);
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=user.module.js.map