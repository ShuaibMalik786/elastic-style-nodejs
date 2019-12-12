import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsRoutingModule } from './card-routing.module';
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = tslib_1.__decorate([
        NgModule({
            declarations: [CardComponent, AddCardComponent, EditCardComponent, ViewCardComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CardsRoutingModule
            ]
        })
    ], CardModule);
    return CardModule;
}());
export { CardModule };
//# sourceMappingURL=card.module.js.map