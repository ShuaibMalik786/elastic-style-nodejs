"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const navbar_1 = require("./model/navbar");
const navbar_service_1 = require("./service/navbar.service");
const navbar_controller_1 = require("./controller/navbar.controller");
let NavbarModule = class NavbarModule {
};
NavbarModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Navbar', schema: navbar_1.NavbarSchema },
            ]),
        ],
        controllers: [navbar_controller_1.NavbarController],
        providers: [navbar_service_1.NavbarService]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map