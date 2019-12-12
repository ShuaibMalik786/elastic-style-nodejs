import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { CardComponent } from './card.component';
var routes = [
    {
        path: "",
        component: CardComponent
    },
    {
        path: "add",
        component: AddCardComponent
    },
    {
        path: "edit/:id",
        component: EditCardComponent
    },
];
var CardsRoutingModule = /** @class */ (function () {
    function CardsRoutingModule() {
    }
    CardsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], CardsRoutingModule);
    return CardsRoutingModule;
}());
export { CardsRoutingModule };
//# sourceMappingURL=card-routing.module.js.map