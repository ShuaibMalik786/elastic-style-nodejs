import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
var routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: ':id',
        component: ViewComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var StyleGuideConfigRoutingModule = /** @class */ (function () {
    function StyleGuideConfigRoutingModule() {
    }
    StyleGuideConfigRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], StyleGuideConfigRoutingModule);
    return StyleGuideConfigRoutingModule;
}());
export { StyleGuideConfigRoutingModule };
//# sourceMappingURL=style-guide-config-routing.module.js.map