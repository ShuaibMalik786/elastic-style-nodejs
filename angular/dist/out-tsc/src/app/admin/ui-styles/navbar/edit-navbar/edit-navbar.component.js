import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../../shared/_service/navbar.service';
var EditNavbarComponent = /** @class */ (function () {
    function EditNavbarComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditNavbarComponent.prototype.ngOnInit = function () {
        this.navbarId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditNavbarComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.navbarId).subscribe(function (success) {
            console.log(success);
            _this.navbar = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditNavbarComponent.prototype.initializeForm = function (navbar) {
        this.form = new FormGroup({
            name: new FormControl(navbar.name, Validators.required),
            css: new FormControl(navbar.css, Validators.required),
            scss: new FormControl(navbar.scss, Validators.required),
            html: new FormControl(navbar.html, Validators.required)
        });
    };
    EditNavbarComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.navbarId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditNavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-navbar',
            templateUrl: './edit-navbar.component.html',
            styleUrls: ['./edit-navbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavbarService,
            ActivatedRoute])
    ], EditNavbarComponent);
    return EditNavbarComponent;
}());
export { EditNavbarComponent };
//# sourceMappingURL=edit-navbar.component.js.map