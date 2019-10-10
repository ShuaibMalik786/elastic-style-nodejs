"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controller/user.controller");
const user_1 = require("./schema/user");
const user_service_1 = require("./service/user.service");
const role_1 = require("./schema/role");
const role_controller_1 = require("./controller/role.controller");
const role_service_1 = require("./service/role.service");
const auth_service_1 = require("../auth/auth.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_1.UserSchema },
                { name: 'Role', schema: role_1.RoleSchema },
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
            }),
        ],
        controllers: [user_controller_1.UserController, role_controller_1.RoleController],
        providers: [user_service_1.UserService, role_service_1.RoleService, auth_service_1.AuthService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map