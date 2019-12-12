import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgressBarService } from '../../../shared/_service/progress-bar.service';
var EditProgressbarComponent = /** @class */ (function () {
    function EditProgressbarComponent(service, route) {
        this.service = service;
        this.route = route;
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            css: new FormControl('', Validators.required),
            scss: new FormControl('', Validators.required),
            html: new FormControl('', Validators.required)
        });
    }
    EditProgressbarComponent.prototype.ngOnInit = function () {
        this.progressBarId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    };
    EditProgressbarComponent.prototype.loadOne = function () {
        var _this = this;
        this.service.getOne(this.progressBarId).subscribe(function (success) {
            console.log(success);
            _this.progressBar = success;
            _this.initializeForm(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    EditProgressbarComponent.prototype.initializeForm = function (progressBar) {
        this.form = new FormGroup({
            name: new FormControl(progressBar.name, Validators.required),
            css: new FormControl(progressBar.css, Validators.required),
            scss: new FormControl(progressBar.scss, Validators.required),
            html: new FormControl(progressBar.html, Validators.required)
        });
    };
    EditProgressbarComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.service
                .update(this.progressBarId, this.form.value)
                .subscribe(function (success) {
                console.log(success);
            }, function (fail) {
                console.log(fail);
            });
        }
    };
    EditProgressbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit-progressbar',
            templateUrl: './edit-progressbar.component.html',
            styleUrls: ['./edit-progressbar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProgressBarService,
            ActivatedRoute])
    ], EditProgressbarComponent);
    return EditProgressbarComponent;
}());
export { EditProgressbarComponent };
//# sourceMappingURL=edit-progressbar.component.js.map