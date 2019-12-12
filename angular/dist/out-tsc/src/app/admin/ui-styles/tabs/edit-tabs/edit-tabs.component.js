import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsService } from 'src/app/admin/shared/_service/tabs.service';
import { ActivatedRoute } from '@angular/router';
var EditTabsComponent = /** @class */ (function () {
    function EditTabsComponent(tabsService, route) {
        this.tabsService = tabsService;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl("", Validators.required),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    EditTabsComponent.prototype.ngOnInit = function () {
        this.tabId = this.route.snapshot.paramMap.get("id");
        this.loadTab();
    };
    EditTabsComponent.prototype.loadTab = function () {
        var _this = this;
        this.tabsService.getOne(this.tabId).subscribe(function (success) {
            console.log(success);
            _this.tab = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditTabsComponent.prototype.initializeForm = function (tab) {
        this.form = new FormGroup({
            name: new FormControl(tab.name, Validators.required),
            css: new FormControl(tab.css, Validators.required),
            scss: new FormControl(tab.scss, Validators.required),
            html: new FormControl(tab.html, Validators.required)
        });
    };
    EditTabsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.tabsService
                .update(this.tabId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditTabsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-tabs',
            templateUrl: './edit-tabs.component.html',
            styleUrls: ['./edit-tabs.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TabsService,
            ActivatedRoute])
    ], EditTabsComponent);
    return EditTabsComponent;
}());
export { EditTabsComponent };
//# sourceMappingURL=edit-tabs.component.js.map