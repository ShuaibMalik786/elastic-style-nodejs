"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_controller_1 = require("./controller/button.controller");
const button_model_1 = require("./model/button.model");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const button_service_1 = require("./service/button.service");
let ButtonsModule = class ButtonsModule {
};
ButtonsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Button', schema: button_model_1.ButtonSchema },
            ]),
        ],
        providers: [button_service_1.ButtonService],
        controllers: [button_controller_1.ButtonController]
    })
], ButtonsModule);
exports.ButtonsModule = ButtonsModule;
//# sourceMappingURL=buttons.module.js.map