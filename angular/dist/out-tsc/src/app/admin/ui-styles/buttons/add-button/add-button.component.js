import * as tslib_1 from "tslib";
import { ButtonService } from "./../../../shared/_service/button.service";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(buttonService) {
        this.buttonService = buttonService;
        this.buttonForm = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddButtonComponent.prototype.ngOnInit = function () { };
    AddButtonComponent.prototype.onSubmit = function () {
        if (this.buttonForm.valid) {
            this.buttonService.addButton(this.buttonForm.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddButtonComponent = tslib_1.__decorate([
        Component({
            selector: "app-add-button",
            templateUrl: "./add-button.component.html",
            styleUrls: ["./add-button.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ButtonService])
    ], AddButtonComponent);
    return AddButtonComponent;
}());
export { AddButtonComponent };
//# sourceMappingURL=add-button.component.js.map