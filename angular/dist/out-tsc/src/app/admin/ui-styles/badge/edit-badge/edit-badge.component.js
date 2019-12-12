import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BadgeService } from '../../../shared/_service/badge.service';
var EditBadgeComponent = /** @class */ (function () {
    function EditBadgeComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl("", Validators.required),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    EditBadgeComponent.prototype.ngOnInit = function () {
        this.badgeId = this.route.snapshot.paramMap.get("id");
        this.loadOne();
    };
    EditBadgeComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.badgeId).subscribe(function (success) {
            console.log(success);
            _this.badge = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditBadgeComponent.prototype.initializeForm = function (badge) {
        this.form = new FormGroup({
            name: new FormControl(badge.name, Validators.required),
            css: new FormControl(badge.css, Validators.required),
            scss: new FormControl(badge.scss, Validators.required),
            html: new FormControl(badge.html, Validators.required)
        });
    };
    EditBadgeComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.badgeId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditBadgeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-badge',
            templateUrl: './edit-badge.component.html',
            styleUrls: ['./edit-badge.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BadgeService,
            ActivatedRoute])
    ], EditBadgeComponent);
    return EditBadgeComponent;
}());
export { EditBadgeComponent };
//# sourceMappingURL=edit-badge.component.js.map