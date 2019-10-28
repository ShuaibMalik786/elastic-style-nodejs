"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const style_guide_controller_1 = require("./controller/style-guide.controller");
const style_guide_service_1 = require("./service/style-guide.service");
const mongoose_1 = require("@nestjs/mongoose");
const button_model_1 = require("../styles/button/model/button.model");
const styleGuide_model_1 = require("./model/styleGuide.model");
const tabs_1 = require("../styles/tabs/model/tabs");
const forms_1 = require("../styles/forms/model/forms");
const badge_1 = require("../styles/badge/model/badge");
const card_1 = require("../styles/card/model/card");
const tooltip_1 = require("../styles/tooltip/model/tooltip");
const popover_1 = require("../styles/popover/model/popover");
const alert_1 = require("../styles/alert/model/alert");
const styleGuideConfig_1 = require("../style-guide-config/model/styleGuideConfig");
const typography_1 = require("../styles/typography/model/typography");
const modal_1 = require("../styles/modal/model/modal");
let StyleGuideModule = class StyleGuideModule {
};
StyleGuideModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Button', schema: button_model_1.ButtonSchema },
                { name: 'StyleGuide', schema: styleGuide_model_1.StyleGuideSchema },
                { name: 'Tabs', schema: tabs_1.TabsSchema },
                { name: 'Form', schema: forms_1.FormsSchema },
                { name: 'Badge', schema: badge_1.BadgeSchema },
                { name: 'Card', schema: card_1.CardSchema },
                { name: 'Tooltip', schema: tooltip_1.TooltipSchema },
                { name: 'Popover', schema: popover_1.PopoverSchema },
                { name: 'Alert', schema: alert_1.AlertSchema },
                { name: 'StyleGuideConfig', schema: styleGuideConfig_1.StyleGuideConfigSchema },
                { name: 'Typography', schema: typography_1.TypographySchema },
                { name: 'Modal', schema: modal_1.ModalSchema },
            ]),
        ],
        controllers: [style_guide_controller_1.StyleGuideController],
        providers: [style_guide_service_1.StyleGuideService],
    })
], StyleGuideModule);
exports.StyleGuideModule = StyleGuideModule;
//# sourceMappingURL=style-guide.module.js.map