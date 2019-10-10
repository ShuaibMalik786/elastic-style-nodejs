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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_2 = require("@nestjs/common");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this.errorDetails = { error: '' };
    }
    async findAll(res) {
        try {
            const users = await this.userModel
                .find()
                .select('-password')
                .populate('roleId');
            res.status(200).send(users);
        }
        catch (err) {
            this.handleError(err, res);
        }
    }
    async create(user) {
        const createdUser = new this.userModel(user);
        let temp = await createdUser.save();
        temp = await this.userModel.findById(temp._id).select("-password");
        return temp;
    }
    async update(id, user) {
        const temp = await this.userModel
            .findByIdAndUpdate(id, user, { new: true })
            .select('-password')
            .populate('role');
        return temp;
    }
    async findOne(id, res) {
        try {
            const temp = await this.userModel
                .findById(id)
                .select('-password')
                .populate('role');
            res.status(200).send(temp);
        }
        catch (err) {
            this.handleError(err, res);
        }
    }
    async getOne(id) {
        try {
            const temp = await this.userModel
                .findById(id)
                .select('-password')
                .populate('role');
            return temp;
        }
        catch (err) {
            return err;
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
};
__decorate([
    __param(0, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "findAll", null);
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "findOne", null);
__decorate([
    __param(1, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "handleError", null);
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map