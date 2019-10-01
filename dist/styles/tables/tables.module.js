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
const tables_1 = require("./model/tables");
const tables_service_1 = require("./service/tables.service");
const tables_controller_1 = require("./controller/tables.controller");
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Tables', schema: tables_1.TablesSchema },
            ]),
        ],
        controllers: [tables_controller_1.TablesController],
        providers: [tables_service_1.TablesService]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map