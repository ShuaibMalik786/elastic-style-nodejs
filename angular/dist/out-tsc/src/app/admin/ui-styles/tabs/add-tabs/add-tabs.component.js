import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsService } from 'src/app/admin/shared/_service/tabs.service';
var AddTabsComponent = /** @class */ (function () {
    function AddTabsComponent(tabsService) {
        this.tabsService = tabsService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddTabsComponent.prototype.ngOnInit = function () { };
    AddTabsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.tabsService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddTabsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-tabs',
            templateUrl: './add-tabs.component.html',
            styleUrls: ['./add-tabs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TabsService])
    ], AddTabsComponent);
    return AddTabsComponent;
}());
export { AddTabsComponent };
//# sourceMappingURL=add-tabs.component.js.map