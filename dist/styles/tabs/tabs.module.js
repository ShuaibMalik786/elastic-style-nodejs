"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tabs_controller_1 = require("./controller/tabs/tabs.controller");
const tabs_service_1 = require("./service/tabs/tabs.service");
const mongoose_1 = require("@nestjs/mongoose");
const tabs_1 = require("./model/tabs");
let TabsModule = class TabsModule {
};
TabsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Tabs', schema: tabs_1.TabsSchema },
            ]),
        ],
        controllers: [tabs_controller_1.TabsController],
        providers: [tabs_service_1.TabsService]
    })
], TabsModule);
exports.TabsModule = TabsModule;
//# sourceMappingURL=tabs.module.js.map