import * as tslib_1 from "tslib";
import { ButtonService } from "./../../../shared/_service/button.service";
import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
var EditButtonComponent = /** @class */ (function () {
    function EditButtonComponent(buttonService, route) {
        this.buttonService = buttonService;
        this.route = route;
        this.buttonForm = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl("", Validators.required),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    EditButtonComponent.prototype.ngOnInit = function () {
        this.buttonId = this.route.snapshot.paramMap.get("id");
        this.loadButtons();
    };
    EditButtonComponent.prototype.loadButtons = function () {
        var _this = this;
        this.buttonService.getButton(this.buttonId).subscribe(function (success) {
            console.log(success);
            _this.button = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditButtonComponent.prototype.initializeForm = function (button) {
        this.buttonForm = new FormGroup({
            name: new FormControl(button.name, Validators.required),
            css: new FormControl(button.css, Validators.required),
            scss: new FormControl(button.scss, Validators.required),
            html: new FormControl(button.html, Validators.required)
        });
    };
    EditButtonComponent.prototype.onSubmit = function () {
        if (this.buttonForm.valid) {
            this.buttonService
                .updateButton(this.buttonId, this.buttonForm.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditButtonComponent = tslib_1.__decorate([
        Component({
            selector: "app-edit-button",
            templateUrl: "./edit-button.component.html",
            styleUrls: ["./edit-button.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ButtonService,
            ActivatedRoute])
    ], EditButtonComponent);
    return EditButtonComponent;
}());
export { EditButtonComponent };
//# sourceMappingURL=edit-button.component.js.map