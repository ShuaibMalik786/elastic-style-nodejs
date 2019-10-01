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
const progress_bar_1 = require("./model/progress-bar");
const progress_bar_service_1 = require("./service/progress-bar.service");
const progress_bar_controller_1 = require("./controller/progress-bar.controller");
let BrogressBarModule = class BrogressBarModule {
};
BrogressBarModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ProgressBar', schema: progress_bar_1.ProgressBarSchema },
            ]),
        ],
        controllers: [progress_bar_controller_1.ProgressbarController],
        providers: [progress_bar_service_1.ProgressBarService]
    })
], BrogressBarModule);
exports.BrogressBarModule = BrogressBarModule;
//# sourceMappingURL=progress-bar.module.js.map