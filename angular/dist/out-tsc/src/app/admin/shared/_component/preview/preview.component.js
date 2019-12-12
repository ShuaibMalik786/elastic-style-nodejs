import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(sanatizer) {
        this.sanatizer = sanatizer;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.ngOnChanges = function () {
        this.previewCss = this.css.replace(/primary-color/g, this.color ? this.color : '#007bff');
        this.content = this.html + "<style>" + this.previewCss + "</style>";
        this.content = this.sanatizer.bypassSecurityTrustHtml(this.content);
    };
    tslib_1.__decorate([
        Input("html"),
        tslib_1.__metadata("design:type", String)
    ], PreviewComponent.prototype, "html", void 0);
    tslib_1.__decorate([
        Input("css"),
        tslib_1.__metadata("design:type", String)
    ], PreviewComponent.prototype, "css", void 0);
    tslib_1.__decorate([
        Input("id"),
        tslib_1.__metadata("design:type", String)
    ], PreviewComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input("color"),
        tslib_1.__metadata("design:type", String)
    ], PreviewComponent.prototype, "color", void 0);
    PreviewComponent = tslib_1.__decorate([
        Component({
            selector: "app-preview",
            templateUrl: "./preview.component.html",
            styleUrls: ["./preview.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], PreviewComponent);
    return PreviewComponent;
}());
export { PreviewComponent };
//# sourceMappingURL=preview.component.js.map