"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_module_1 = require("./config/config.module");
const room_module_1 = require("./room/room.module");
const user_module_1 = require("./user/user.module");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const logging_interceptor_1 = require("./core/inercepor/logging.interceptor");
const auth_module_1 = require("./auth/auth.module");
const message_module_1 = require("./message/message.module");
const buttons_module_1 = require("./styles/button/buttons.module");
const style_guide_module_1 = require("./style-guide/style-guide.module");
const tabs_module_1 = require("./styles/tabs/tabs.module");
const alert_module_1 = require("./styles/alert/alert.module");
const badge_module_1 = require("./styles/badge/badge.module");
const card_module_1 = require("./styles/card/card.module");
const forms_module_1 = require("./styles/forms/forms.module");
const jumbotron_module_1 = require("./styles/jumbotron/jumbotron.module");
const modal_module_1 = require("./styles/modal/modal.module");
const navbar_module_1 = require("./styles/navbar/navbar.module");
const pagination_module_1 = require("./styles/pagination/pagination.module");
const pills_module_1 = require("./styles/pills/pills.module");
const popover_module_1 = require("./styles/popover/popover.module");
const progress_bar_module_1 = require("./styles/progress-bar/progress-bar.module");
const tables_module_1 = require("./styles/tables/tables.module");
const tooltip_module_1 = require("./styles/tooltip/tooltip.module");
const typography_module_1 = require("./styles/typography/typography.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_service_1 = require("./config/service/config.service");
const style_guide_config_module_1 = require("./style-guide-config/style-guide-config.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            config_module_1.ConfigModule,
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                useExisting: config_service_1.ConfigService,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '../angular/dist/admin'),
            }),
            auth_module_1.AuthModule,
            room_module_1.RoomModule,
            message_module_1.MessageModule,
            buttons_module_1.ButtonsModule,
            style_guide_module_1.StyleGuideModule,
            tabs_module_1.TabsModule,
            alert_module_1.AlertModule,
            badge_module_1.BadgeModule,
            card_module_1.CardModule,
            forms_module_1.FormsModule,
            jumbotron_module_1.JumbotronModule,
            modal_module_1.ModalModule,
            navbar_module_1.NavbarModule,
            pagination_module_1.PaginationModule,
            pills_module_1.PillsModule,
            popover_module_1.PopoverModule,
            progress_bar_module_1.BrogressBarModule,
            tables_module_1.TablesModule,
            tooltip_module_1.TooltipModule,
            typography_module_1.TypographyModule,
            style_guide_config_module_1.StyleGuideConfigModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map