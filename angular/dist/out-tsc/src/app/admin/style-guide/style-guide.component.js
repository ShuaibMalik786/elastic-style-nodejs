import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StyleGuideService } from '../shared/_service/style-guide.service';
import { saveAs } from 'file-saver';
var StyleGuideComponent = /** @class */ (function () {
    function StyleGuideComponent(styleGuideService) {
        this.styleGuideService = styleGuideService;
    }
    StyleGuideComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    StyleGuideComponent.prototype.loadAll = function () {
        var _this = this;
        this.styleGuideService.getAll().subscribe(function (success) {
            _this.styleGuides = success;
            console.log(success);
        }, function (fail) {
            console.log(fail);
        });
    };
    StyleGuideComponent.prototype.delete = function (id) {
        var _this = this;
        this.styleGuideService.delete(id).subscribe(function (success) {
            console.log(success);
            _this.loadAll();
        }, function (fail) {
            console.log(fail);
        });
    };
    StyleGuideComponent.prototype.download = function (id) {
        this.styleGuideService.download(id).subscribe(function (success) {
            console.log(success);
            saveAs(success, 'elasticStyle' + ".css");
        }, function (fail) {
            console.log(fail);
        });
    };
    StyleGuideComponent = tslib_1.__decorate([
        Component({
            selector: 'app-style-guide',
            templateUrl: './style-guide.component.html',
            styleUrls: ['./style-guide.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StyleGuideService])
    ], StyleGuideComponent);
    return StyleGuideComponent;
}());
export { StyleGuideComponent };
//# sourceMappingURL=style-guide.component.js.map