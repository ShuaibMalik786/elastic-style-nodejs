import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JumbotronService } from '../../../shared/_service/jumbotron.service';
var EditJumbotronComponent = /** @class */ (function () {
    function EditJumbotronComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditJumbotronComponent.prototype.ngOnInit = function () {
        this.jumbotronId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditJumbotronComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.jumbotronId).subscribe(function (success) {
            console.log(success);
            _this.jumbotron = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditJumbotronComponent.prototype.initializeForm = function (jumbotron) {
        this.form = new FormGroup({
            name: new FormControl(jumbotron.name, Validators.required),
            css: new FormControl(jumbotron.css, Validators.required),
            scss: new FormControl(jumbotron.scss, Validators.required),
            html: new FormControl(jumbotron.html, Validators.required)
        });
    };
    EditJumbotronComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.jumbotronId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditJumbotronComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-jumbotron',
            templateUrl: './edit-jumbotron.component.html',
            styleUrls: ['./edit-jumbotron.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [JumbotronService,
            ActivatedRoute])
    ], EditJumbotronComponent);
    return EditJumbotronComponent;
}());
export { EditJumbotronComponent };
//# sourceMappingURL=edit-jumbotron.component.js.map