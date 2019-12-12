import * as tslib_1 from "tslib";
import { ToasterService } from "./../../shared/_service/toaster.service";
import { Component } from "@angular/core";
import { StyleGuideService } from "../../shared/_service/style-guide.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
var AddStyleGuideComponent = /** @class */ (function () {
    function AddStyleGuideComponent(styleGuideService, toasterService) {
        this.styleGuideService = styleGuideService;
        this.toasterService = toasterService;
        this.color = '#007bff';
        this.successColor = '#28a745';
        this.warningColor = '#FFC10D';
        this.dangerColor = '#dc3545';
        this.secondaryColor = '#6c757d';
        this.styleGuideForm = new FormGroup({
            primaryColor: new FormControl(""),
            button: new FormControl(""),
            buttonCss: new FormControl(""),
            tab: new FormControl(""),
            tabsCss: new FormControl(""),
            form: new FormControl(""),
            formCss: new FormControl(""),
            badge: new FormControl(""),
            badgeCss: new FormControl(""),
            card: new FormControl(""),
            cardCss: new FormControl(""),
            css: new FormControl("", Validators.required)
        });
    }
    AddStyleGuideComponent.prototype.ngOnInit = function () {
        this.getUiComponents();
    };
    AddStyleGuideComponent.prototype.getUiComponents = function () {
        var _this = this;
        this.styleGuideService.getUiComponents().subscribe(function (success) {
            _this.components = success;
        }, function (fail) {
            console.log(fail);
        });
    };
    AddStyleGuideComponent.prototype.colorSelected = function (color) {
        this.styleGuideForm.controls["primaryColor"].setValue(color);
    };
    AddStyleGuideComponent.prototype.onSubmit = function () {
        this.genrateCss();
        if (!this.styleGuideForm.valid) {
            this.toasterService.warning('please select atleast one component');
        }
        console.log(this.styleGuideForm.value);
        // if (this.styleGuideForm.valid) {
        // this.styleGuideService.create(this.styleGuideForm.value).subscribe(
        //   success => {
        //     console.log(success);
        //   },
        //   fail => {
        //     console.log(fail);
        //   }
        // );
        // }
    };
    AddStyleGuideComponent.prototype.buttonSelected = function (css) {
        this.styleGuideForm.controls["buttonCss"].setValue(css);
    };
    AddStyleGuideComponent.prototype.tabSelected = function (css) {
        var color = this.styleGuideForm.controls["primaryColor"].value;
        css = css.replace(/primary-color/g, color ? color : "#007bff");
        console.log(css);
        this.styleGuideForm.controls["tabsCss"].setValue(css);
    };
    AddStyleGuideComponent.prototype.formSelected = function (css) {
        this.styleGuideForm.controls["formCss"].setValue(css);
    };
    AddStyleGuideComponent.prototype.badgeSelected = function (css) {
        this.styleGuideForm.controls["badgeCss"].setValue(css);
    };
    AddStyleGuideComponent.prototype.cardSelected = function (css) {
        this.styleGuideForm.controls["cardCss"].setValue(css);
    };
    AddStyleGuideComponent.prototype.genrateCss = function () {
        var css = this.styleGuideForm.controls["buttonCss"].value +
            this.styleGuideForm.controls["buttonCss"].value +
            this.styleGuideForm.controls["tabsCss"].value +
            this.styleGuideForm.controls["formCss"].value +
            this.styleGuideForm.controls["badgeCss"].value +
            this.styleGuideForm.controls["cardCss"].value;
        var color = this.styleGuideForm.controls["primaryColor"].value;
        css = css.replace(/primary-color/g, color ? color : "#007bff");
        this.styleGuideForm.controls["css"].setValue(css);
    };
    AddStyleGuideComponent = tslib_1.__decorate([
        Component({
            selector: "app-add-style-guide",
            templateUrl: "./add-style-guide.component.html",
            styleUrls: ["./add-style-guide.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideService,
            ToasterService])
    ], AddStyleGuideComponent);
    return AddStyleGuideComponent;
}());
export { AddStyleGuideComponent };
//# sourceMappingURL=add-style-guide.component.js.map