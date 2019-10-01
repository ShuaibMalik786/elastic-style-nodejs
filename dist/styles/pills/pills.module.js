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
const pills_1 = require("./model/pills");
const pills_service_1 = require("./service/pills.service");
const pills_controller_1 = require("./controller/pills.controller");
let PillsModule = class PillsModule {
};
PillsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Pills', schema: pills_1.PillsSchema },
            ]),
        ],
        controllers: [pills_controller_1.PillsController],
        providers: [pills_service_1.PillsService]
    })
], PillsModule);
exports.PillsModule = PillsModule;
//# sourceMappingURL=pills.module.js.map