import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptors/auth.interceptors';
import { FormModule } from './admin/ui-styles/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/service/auth.service';
import { EuPopupComponent } from './npm-demos/eu-popup/eu-popup.component';
import { EuLoaderComponent } from './npm-demos/eu-loader/eu-loader.component';
// third party modules
import { ToastrModule } from 'ngx-toastr';
import { Ng5SliderModule } from 'ng5-slider';
import { EuPopupModule } from 'eu-popup';
import { EuLoaderModule } from 'eu-loader';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                EuPopupComponent,
                EuLoaderComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                CommonModule,
                BrowserAnimationsModule,
                FormsModule,
                ToastrModule.forRoot(),
                FormModule,
                Ng5SliderModule,
                ReactiveFormsModule,
                EuPopupModule,
                EuLoaderModule,
            ],
            providers: [{
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                },
                AuthService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map