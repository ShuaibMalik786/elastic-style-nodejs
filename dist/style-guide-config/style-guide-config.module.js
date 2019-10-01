"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const style_guide_config_controller_1 = require("./controller/style-guide-config/style-guide-config.controller");
const style_guide_config_service_1 = require("./service/style-guide-config/style-guide-config.service");
const mongoose_1 = require("@nestjs/mongoose");
const styleGuideConfig_1 = require("./model/styleGuideConfig");
let StyleGuideConfigModule = class StyleGuideConfigModule {
};
StyleGuideConfigModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'StyleGuideConfig', schema: styleGuideConfig_1.StyleGuideConfigSchema },
            ]),
        ],
        controllers: [style_guide_config_controller_1.StyleGuideConfigController],
        providers: [style_guide_config_service_1.StyleGuideConfigService],
    })
], StyleGuideConfigModule);
exports.StyleGuideConfigModule = StyleGuideConfigModule;
//# sourceMappingURL=style-guide-config.module.js.map