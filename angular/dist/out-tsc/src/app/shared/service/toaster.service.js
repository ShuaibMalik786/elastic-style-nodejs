import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
    }
    ToasterService.prototype.success = function (message) {
        this.toastr.success(message, '', {
            timeOut: 2000,
            closeButton: true
        });
    };
    ToasterService.prototype.error = function (message) {
        this.toastr.error(message, '', {
            timeOut: 2000,
            closeButton: true
        });
    };
    ToasterService.prototype.warning = function (message) {
        this.toastr.warning(message, '', {
            timeOut: 2000,
            closeButton: true
        });
    };
    ToasterService.prototype.info = function (message) {
        this.toastr.info(message, '', {
            timeOut: 2000,
            closeButton: true
        });
    };
    ToasterService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ToastrService])
    ], ToasterService);
    return ToasterService;
}());
export { ToasterService };
//# sourceMappingURL=toaster.service.js.map