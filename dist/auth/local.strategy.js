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
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(userModel) {
        super();
        this.userModel = userModel;
    }
    async validate(user, res) {
        try {
            const temp = await this.userModel
                .find({ email: user.email })
                .select('-password')
                .populate('roleId');
            if (temp) {
                res.status(404).send(temp);
            }
            else {
                res.status(200).send(temp);
            }
        }
        catch (err) {
            this.handleError(err, res);
        }
    }
    handleError(error, res) {
        let errorDetails = { error: '' };
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
};
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocalStrategy.prototype, "validate", null);
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LocalStrategy.prototype, "handleError", null);
LocalStrategy = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map