import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserAccountService } from '../service/user-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from '../../shared/service/toaster.service';
import { UserStyleSheetService } from '../service/user-style-sheet.service';
import { saveAs } from 'file-saver';
var UserSgComponent = /** @class */ (function () {
    function UserSgComponent(userAccountService, userStyleSheetService, route, router, toasterService) {
        this.userAccountService = userAccountService;
        this.userStyleSheetService = userStyleSheetService;
        this.route = route;
        this.router = router;
        this.toasterService = toasterService;
    }
    UserSgComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getUserSGs();
    };
    UserSgComponent.prototype.logout = function () {
        this.userAccountService.logOut();
        this.router.navigate(['/']);
    };
    UserSgComponent.prototype.getUserSGs = function () {
        var _this = this;
        this.userStyleSheetService.getSGs(this.userId)
            .subscribe(function (success) {
            _this.SGs = success;
            console.log(_this.SGs);
        }, function (fail) {
            _this.toasterService.error('Failed to load data');
        });
    };
    UserSgComponent.prototype.download = function (sgId) {
        this.userStyleSheetService.download(sgId).subscribe(function (success) {
            console.log(success);
            saveAs(success, 'elasticStyle' + ".css");
        }, function (fail) {
            console.log(fail);
        });
    };
    UserSgComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-sg',
            templateUrl: './user-sg.component.html',
            styleUrls: ['./user-sg.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserAccountService,
            UserStyleSheetService,
            ActivatedRoute,
            Router,
            ToasterService])
    ], UserSgComponent);
    return UserSgComponent;
}());
export { UserSgComponent };
//# sourceMappingURL=user-sg.component.js.map