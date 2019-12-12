import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JumbotronService } from 'src/app/admin/shared/_service/jumbotron.service';
var AddJumbotronComponent = /** @class */ (function () {
    function AddJumbotronComponent(jumbotronService) {
        this.jumbotronService = jumbotronService;
        this.form = new FormGroup({
            name: new FormControl("", Validators.required),
            css: new FormControl(""),
            scss: new FormControl("", Validators.required),
            html: new FormControl("", Validators.required)
        });
    }
    AddJumbotronComponent.prototype.ngOnInit = function () {
    };
    AddJumbotronComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.jumbotronService.create(this.form.value).subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    AddJumbotronComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-jumbotron',
            templateUrl: './add-jumbotron.component.html',
            styleUrls: ['./add-jumbotron.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [JumbotronService])
    ], AddJumbotronComponent);
    return AddJumbotronComponent;
}());
export { AddJumbotronComponent };
//# sourceMappingURL=add-jumbotron.component.js.map