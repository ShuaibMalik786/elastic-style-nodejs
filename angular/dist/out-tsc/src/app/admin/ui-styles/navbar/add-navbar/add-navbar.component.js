import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/admin/shared/_service/navbar.service';
var AddNavbarComponent = /** @class */ (function () {
    function AddNavbarComponent(navbarService) {
        this.navbarService = navbarService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddNavbarComponent.prototype.ngOnInit = function () {
    };
    AddNavbarComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.navbarService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddNavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-navbar',
            templateUrl: './add-navbar.component.html',
            styleUrls: ['./add-navbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavbarService])
    ], AddNavbarComponent);
    return AddNavbarComponent;
}());
export { AddNavbarComponent };
//# sourceMappingURL=add-navbar.component.js.map