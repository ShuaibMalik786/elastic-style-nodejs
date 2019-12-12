import * as tslib_1 from "tslib";
import { UserStyleGuideService } from './../../user/shared/_service/user-style-guide.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToasterService } from 'src/app/admin/shared/_service/toaster.service';
import { saveAs } from 'file-saver';
import { AuthService } from '../../shared/service/auth.service';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';
import { DomSanitizer } from '@angular/platform-browser';
var StyleGuideComponent = /** @class */ (function () {
    function StyleGuideComponent(styleGuideService, toasterService, authService, loginService, router, sanatizer) {
        this.styleGuideService = styleGuideService;
        this.toasterService = toasterService;
        this.authService = authService;
        this.loginService = loginService;
        this.router = router;
        this.sanatizer = sanatizer;
        this.primaryColor = 'red';
        this.secondaryColor = '#6c757d';
        this.successColor = '#28a745';
        this.infoColor = '#17a2b8';
        this.warningColor = '#FFC10D';
        this.dangerColor = '#dc3545';
        this.darkColor = '#343a40';
        this.lightColor = '#f8f9fa';
        this.primaryGradientColor = 'rgba(0,0,0,0.45)';
        this.secondaryGradientColor = 'rgba(191, 190,190,0.45)';
        this.successGradientColor = 'rgba(0,0,0,0.45)';
        this.infoGradientColor = 'rgba(0,0,0,0.45)';
        this.warningGradientColor = 'rgba(191, 190,190,0.45)';
        this.dangerGradientColor = 'rgba(222, 222,222,0.45)';
        this.fontSizeDefault = 14;
        this.options = {
            floor: 5,
            ceil: 22,
            animate: false
        };
        this.styleGuideForm = new FormGroup({
            primaryColor: new FormControl(this.primaryColor),
            secondaryColor: new FormControl(this.secondaryColor),
            successColor: new FormControl(this.successColor),
            infoColor: new FormControl(this.infoColor),
            warningColor: new FormControl(this.warningColor),
            dangerColor: new FormControl(this.dangerColor),
            darkColor: new FormControl(this.secondaryColor),
            lightColor: new FormControl(this.secondaryColor),
            primaryGradientColor: new FormControl(this.primaryGradientColor),
            secondaryGradientColor: new FormControl(this.secondaryGradientColor),
            successGradientColor: new FormControl(this.successGradientColor),
            infoGradientColor: new FormControl(this.infoGradientColor),
            warningGradientColor: new FormControl(this.warningGradientColor),
            dangerGradientColor: new FormControl(this.dangerGradientColor),
            button: new FormControl(''),
            buttonCss: new FormControl(''),
            tab: new FormControl(''),
            tabCss: new FormControl(''),
            form: new FormControl(''),
            formCss: new FormControl(''),
            badge: new FormControl(''),
            badgeCss: new FormControl(''),
            card: new FormControl(''),
            cardCss: new FormControl(''),
            tooltip: new FormControl(''),
            tooltipCss: new FormControl(''),
            popover: new FormControl(''),
            popoverCss: new FormControl(''),
            alert: new FormControl(''),
            alertCss: new FormControl(''),
            typography: new FormControl(''),
            typographyCss: new FormControl(''),
            modal: new FormControl(''),
            modalCss: new FormControl(''),
            css: new FormControl('', Validators.required),
            userId: new FormControl('unRegistered', Validators.required),
            config: new FormControl(''),
        });
    }
    StyleGuideComponent.prototype.ngOnInit = function () {
        this.getUiComponents();
    };
    StyleGuideComponent.prototype.getUiComponents = function () {
        var _this = this;
        this.styleGuideService.getUiComponents().subscribe(function (success) {
            _this.components = success;
            _this.initializeForm();
        }, function (fail) {
            console.log(fail);
        });
    };
    StyleGuideComponent.prototype.PrimaryColorSelected = function (color) {
        this.styleGuideForm.controls['primaryColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.secondaryColorSelected = function (color) {
        this.styleGuideForm.controls['secondaryColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.successColorSelected = function (color) {
        this.styleGuideForm.controls['successColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.infoColorSelected = function (color) {
        this.styleGuideForm.controls['infoColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.warningColorSelected = function (color) {
        this.styleGuideForm.controls['warningColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.dangerColorSelected = function (color) {
        this.styleGuideForm.controls['dangerColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.darkColorSelected = function (color) {
        this.styleGuideForm.controls['darkColor'].setValue(color);
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.lightColorSelected = function (color) {
        this.styleGuideForm.controls['lightColor'].setValue(color);
    };
    StyleGuideComponent.prototype.primaryGradientColorSelected = function (color) {
        this.styleGuideForm.controls['successGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.successGradientColorSelected = function (color) {
        this.styleGuideForm.controls['successGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.infoGradientColorSelected = function (color) {
        this.styleGuideForm.controls['infoGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.warningGradientColorSelected = function (color) {
        this.styleGuideForm.controls['warningGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.dangerGradientColorSelected = function (color) {
        this.styleGuideForm.controls['dangerGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.secondaryGradientColorSelected = function (color) {
        this.styleGuideForm.controls['secondaryGradientColor'].setValue(color);
    };
    StyleGuideComponent.prototype.onSubmit = function () {
        var userId = JSON.parse(localStorage.getItem('user'));
        userId ? userId = userId._id : userId = 'unRegisteredUser';
        console.log(userId);
        this.genrateCss();
        if (!this.styleGuideForm.valid) {
            this.toasterService.error('No styles selected');
        }
        console.log(this.styleGuideForm.value);
        this.styleGuideForm.controls['userId'].setValue(userId);
        if (this.styleGuideForm.valid) {
            this.styleGuideService.create(this.styleGuideForm.value).subscribe(function (success) {
                console.log(success);
                saveAs(success, 'elasticStyle' + ".min.css");
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    StyleGuideComponent.prototype.getFormControlName = function (name) {
        return name.toLowerCase();
    };
    StyleGuideComponent.prototype.styleSelected = function (css, name) {
        var formControlName = name.toLowerCase() + "Css";
        console.log(formControlName);
        this.styleGuideForm.controls[formControlName].setValue(css);
    };
    StyleGuideComponent.prototype.displayHtml = function (html) {
        this.html = html;
    };
    StyleGuideComponent.prototype.slideToggle = function () {
        $('.colors').slideToggle();
    };
    StyleGuideComponent.prototype.slideToggle2 = function () {
        $('.config').slideToggle();
    };
    StyleGuideComponent.prototype.genrateCss = function () {
        var css = this.styleGuideForm.controls['config'].value +
            this.styleGuideForm.controls['buttonCss'].value +
            this.styleGuideForm.controls['tabsCss'].value +
            this.styleGuideForm.controls['formCss'].value +
            this.styleGuideForm.controls['badgeCss'].value +
            this.styleGuideForm.controls['cardCss'].value +
            this.styleGuideForm.controls['tooltipCss'].value +
            this.styleGuideForm.controls['popoverCss'].value +
            this.styleGuideForm.controls['alertCss'].value;
        css = css.replace(/primary-color/g, this.primaryColor);
        css = css.replace(/secondary-color/g, this.secondaryColor);
        css = css.replace(/success-color/g, this.successColor);
        css = css.replace(/warning-color/g, this.warningColor);
        css = css.replace(/danger-color/g, this.dangerColor);
        // Gradient colors
        css = css.replace(/primary-gradient-color/g, this.primaryGradientColor);
        css = css.replace(/secondary-gradient-color/g, this.secondaryGradientColor);
        css = css.replace(/success-gradient-color/g, this.successGradientColor);
        css = css.replace(/warning-gradient-color/g, this.warningGradientColor);
        css = css.replace(/danger-gradient-color/g, this.dangerGradientColor);
        this.styleGuideForm.controls['css'].setValue(css);
        for (var propName in this.styleGuideForm.value) {
            if (this.styleGuideForm.value[propName] === null ||
                this.styleGuideForm.value[propName] === undefined ||
                this.styleGuideForm.value[propName] === '') {
                delete this.styleGuideForm.value[propName];
            }
        }
    };
    StyleGuideComponent.prototype.initializeForm = function () {
        if (this.components.colors) {
            this.primaryColor = this.components.colors[0].primaryColor;
            this.successColor = this.components.colors[0].successColor;
            this.warningColor = this.components.colors[0].warningColor;
            this.dangerColor = this.components.colors[0].dangerColor;
            this.secondaryColor = this.components.colors[0].secondaryColor;
            this.infoColor = this.components.colors[0].infoColor;
            this.darkColor = this.components.colors[0].darkColor;
            this.lightColor = this.components.colors[0].lightColor;
            this.primaryGradientColor = this.components.colors[0].primaryGradientColor;
            this.secondaryGradientColor = this.components.colors[0].secondaryGradientColor;
            this.successGradientColor = this.components.colors[0].successGradientColor;
            this.infoGradientColor = this.components.colors[0].infoGradientColor;
            this.warningGradientColor = this.components.colors[0].warningGradientColor;
            this.dangerGradientColor = this.components.colors[0].dangerGradientColor;
            this.styleGuideForm = new FormGroup({
                primaryColor: new FormControl(this.primaryColor),
                secondaryColor: new FormControl(this.secondaryColor),
                successColor: new FormControl(this.successColor),
                infoColor: new FormControl(this.infoColor),
                warningColor: new FormControl(this.warningColor),
                dangerColor: new FormControl(this.dangerColor),
                darkColor: new FormControl(this.secondaryColor),
                lightColor: new FormControl(this.secondaryColor),
                primaryGradientColor: new FormControl(this.primaryGradientColor),
                secondaryGradientColor: new FormControl(this.secondaryGradientColor),
                successGradientColor: new FormControl(this.successGradientColor),
                infoGradientColor: new FormControl(this.infoGradientColor),
                warningGradientColor: new FormControl(this.warningGradientColor),
                dangerGradientColor: new FormControl(this.dangerGradientColor),
                button: new FormControl(''),
                buttonCss: new FormControl(''),
                tab: new FormControl(''),
                tabsCss: new FormControl(''),
                form: new FormControl(''),
                formCss: new FormControl(''),
                badge: new FormControl(''),
                badgeCss: new FormControl(''),
                card: new FormControl(''),
                cardCss: new FormControl(''),
                tooltip: new FormControl(''),
                tooltipCss: new FormControl(''),
                popover: new FormControl(''),
                popoverCss: new FormControl(''),
                alert: new FormControl(''),
                alertCss: new FormControl(''),
                typography: new FormControl(''),
                typographyCss: new FormControl(''),
                modal: new FormControl(''),
                modalCss: new FormControl(''),
                css: new FormControl('', Validators.required),
                userId: new FormControl('unRegistered', Validators.required),
                config: new FormControl(''),
            });
        }
        this.loginForm = new ValidationManager({
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
        this.initializeConfig();
    };
    StyleGuideComponent.prototype.saveSg = function () {
        if (!this.authService.isLoggedIn()) {
            $('#loginModal').modal('show');
        }
        else {
            // Save style sheet
            this.onSubmit();
        }
    };
    StyleGuideComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.isValid()) {
            this.loginService.login(this.loginForm.getData())
                .subscribe(function (success) {
                localStorage.setItem('token', success.access_token);
                localStorage.setItem('user', JSON.stringify(success.user));
                _this.onSubmit();
                $('#loginModal').modal('hide');
            }, function (fail) {
                console.log(fail);
                _this.errorMessage = fail.error.error;
            });
        }
    };
    StyleGuideComponent.prototype.initializeConfig = function () {
        this.styleGuideForm.controls['config'].setValue("\n        html {font-size: " + this.fontSizeDefault + "px;}\n        .bg-primary { background-color: " + this.primaryColor + ";}\n        .bg-success { background-color: " + this.successColor + ";}\n        .bg-info { background-color: " + this.infoColor + ";}\n        .bg-warning { background-color: " + this.warningColor + ";}\n        .bg-danger { background-color: " + this.dangerColor + ";}\n        .bg-secondary { background-color: " + this.secondaryColor + ";}\n        .bg-light { background-color: " + this.lightColor + ";}\n        .bg-dark { background-color: " + this.darkColor + ";}\n        .text-primary { color: " + this.primaryColor + ";}\n        .text-success { color: " + this.successColor + ";}\n        .text-info { color: " + this.infoColor + ";}\n        .text-warning { color: " + this.warningColor + ";}\n        .text-danger { color: " + this.dangerColor + ";}\n        .text-secondary { color: " + this.secondaryColor + ";}\n        .text-light { color: " + this.lightColor + ";}\n        .text-dark { color: " + this.darkColor + ";}\n        ");
        // set font size css equal to fontSizeDefault variable
        this.config = "<style>html {font-size: " + this.fontSizeDefault + "px }</style>";
        this.config = this.sanatizer.bypassSecurityTrustHtml(this.config);
    };
    StyleGuideComponent.prototype.fontSizeChanged = function () {
        this.initializeConfig();
        this.config = "<style>html {font-size: " + this.fontSizeDefault + "px }</style>";
        this.config = this.sanatizer.bypassSecurityTrustHtml(this.config);
    };
    StyleGuideComponent = tslib_1.__decorate([
        Component({
            selector: 'app-style-guide',
            templateUrl: './style-guide.component.html',
            styleUrls: ['./style-guide.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserStyleGuideService,
            ToasterService,
            AuthService,
            LoginService,
            Router,
            DomSanitizer])
    ], StyleGuideComponent);
    return StyleGuideComponent;
}());
export { StyleGuideComponent };
//# sourceMappingURL=style-guide.component.js.map