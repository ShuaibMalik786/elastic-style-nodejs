import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var UserPreviewComponent = /** @class */ (function () {
    function UserPreviewComponent(sanatizer) {
        this.sanatizer = sanatizer;
    }
    UserPreviewComponent.prototype.ngOnInit = function () {
    };
    UserPreviewComponent.prototype.ngOnChanges = function () {
        this.previewCss = this.css.replace(/primary-color/g, this.primaryColor ? this.primaryColor : '#007bff');
        this.previewCss = this.previewCss.replace(/success-color/g, this.successColor ? this.successColor : '#28a745');
        this.previewCss = this.previewCss.replace(/warning-color/g, this.warningColor ? this.warningColor : '#FFC10D');
        this.previewCss = this.previewCss.replace(/danger-color/g, this.dangerColor ? this.dangerColor : '#28a745');
        this.previewCss = this.previewCss.replace(/secondary-color/g, this.secondaryColor ? this.secondaryColor : '#28a745');
        this.previewCss = this.previewCss.replace(/info-color/g, this.infoColor ? this.infoColor : '#28a745');
        this.previewCss = this.previewCss.replace(/dark-color/g, this.darkColor ? this.darkColor : '#28a745');
        this.previewCss = this.previewCss.replace(/light-color/g, this.lightColor ? this.lightColor : '#28a745');
        this.previewCss = this.previewCss.replace(/primary-gradient-color/g, this.primaryGradientColor ? this.primaryGradientColor : '#28a745');
        this.previewCss = this.previewCss.replace(/secondary-gradient-color/g, this.secondaryGradientColor ? this.secondaryGradientColor : '#28a745');
        this.previewCss = this.previewCss.replace(/success-gradient-color/g, this.successGradientColor ? this.successGradientColor : '#28a745');
        this.previewCss = this.previewCss.replace(/info-gradient-color/g, this.infoGradientColor ? this.infoGradientColor : '#28a745');
        this.previewCss = this.previewCss.replace(/warning-gradient-color/g, this.warningGradientColor ? this.warningGradientColor : '#28a745');
        this.previewCss = this.previewCss.replace(/danger-gradient-color/g, this.dangerGradientColor ? this.dangerGradientColor : '#28a745');
        this.content = this.html + "<style>" + this.previewCss + "</style>";
        this.content = this.sanatizer.bypassSecurityTrustHtml(this.content);
    };
    tslib_1.__decorate([
        Input('css'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "css", void 0);
    tslib_1.__decorate([
        Input('html'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "html", void 0);
    tslib_1.__decorate([
        Input('id'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input('primaryColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "primaryColor", void 0);
    tslib_1.__decorate([
        Input('successColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "successColor", void 0);
    tslib_1.__decorate([
        Input('warningColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "warningColor", void 0);
    tslib_1.__decorate([
        Input('dangerColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "dangerColor", void 0);
    tslib_1.__decorate([
        Input('secondaryColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "secondaryColor", void 0);
    tslib_1.__decorate([
        Input('infoColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "infoColor", void 0);
    tslib_1.__decorate([
        Input('darkColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "darkColor", void 0);
    tslib_1.__decorate([
        Input('lightColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "lightColor", void 0);
    tslib_1.__decorate([
        Input('primaryGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "primaryGradientColor", void 0);
    tslib_1.__decorate([
        Input('secondaryGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "secondaryGradientColor", void 0);
    tslib_1.__decorate([
        Input('successGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "successGradientColor", void 0);
    tslib_1.__decorate([
        Input('infoGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "infoGradientColor", void 0);
    tslib_1.__decorate([
        Input('warningGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "warningGradientColor", void 0);
    tslib_1.__decorate([
        Input('dangerGradientColor'),
        tslib_1.__metadata("design:type", String)
    ], UserPreviewComponent.prototype, "dangerGradientColor", void 0);
    UserPreviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], UserPreviewComponent);
    return UserPreviewComponent;
}());
export { UserPreviewComponent };
//# sourceMappingURL=preview.component.js.map