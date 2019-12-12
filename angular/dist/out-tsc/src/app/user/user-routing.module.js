import * as tslib_1 from "tslib";
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
var routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'style-guide',
                component: StyleGuideComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map