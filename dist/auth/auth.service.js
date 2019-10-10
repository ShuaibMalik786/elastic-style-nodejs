"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/service/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService, userModel) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.userModel = userModel;
    }
    async login(user, res) {
        try {
            let temp = await this.userModel
                .findOne({ email: user.email, password: user.password })
                .select('-password')
                .populate('role');
            if (!temp || temp.length == 0) {
                res.status(404).send({ error: 'Invalid email or password' });
            }
            temp = this.genrateToken(temp);
            res.status(200).send(temp);
        }
        catch (err) {
            this.handleError(err, res);
        }
    }
    handleError(error, res) {
        const errorDetails = { error: '' };
        if (error.errmsg) {
            errorDetails.error = error.errmsg;
            res.status(400).send(errorDetails);
        }
        else if (error.message) {
            errorDetails.error = error.message;
            res.status(400).send(errorDetails);
        }
        else {
            res.status(400).send(error);
        }
    }
    genrateToken(usr) {
        const payload = { email: usr.email, sub: usr._id };
        return {
            user: usr,
            access_token: this.jwtService.sign(payload),
        };
    }
};
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "login", null);
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthService.prototype, "handleError", null);
AuthService = __decorate([
    common_1.Injectable(),
    __param(2, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService, typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map