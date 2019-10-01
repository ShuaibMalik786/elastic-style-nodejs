"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const popover_1 = require("./model/popover");
const mongoose_1 = require("@nestjs/mongoose");
const popover_service_1 = require("./service/popover.service");
const popover_controller_1 = require("./controller/popover.controller");
let PopoverModule = class PopoverModule {
};
PopoverModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Popover', schema: popover_1.PopoverSchema },
            ]),
        ],
        controllers: [popover_controller_1.PopoverController],
        providers: [popover_service_1.PopoverService]
    })
], PopoverModule);
exports.PopoverModule = PopoverModule;
//# sourceMappingURL=popover.module.js.map