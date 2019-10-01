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
const jumbotron_1 = require("./model/jumbotron");
const jumbotron_service_1 = require("./service/jumbotron.service");
const jumbotron_controller_1 = require("./controller/jumbotron.controller");
let JumbotronModule = class JumbotronModule {
};
JumbotronModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Jumbotron', schema: jumbotron_1.JumbotronSchema },
            ]),
        ],
        controllers: [jumbotron_controller_1.JumboController],
        providers: [jumbotron_service_1.JumbotronService]
    })
], JumbotronModule);
exports.JumbotronModule = JumbotronModule;
//# sourceMappingURL=jumbotron.module.js.map