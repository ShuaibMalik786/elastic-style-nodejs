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
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const sass = require('node-sass');
let NavbarService = class NavbarService {
    constructor(navbarModel) {
        this.navbarModel = navbarModel;
    }
    async findAll() {
        const tabs = await this.navbarModel.find();
        return tabs;
    }
    async findOne(id) {
        const tabs = await this.navbarModel.findById(id);
        return tabs;
    }
    async add(button) {
        const model = new this.navbarModel(button);
        let tabs = await model.save();
        return tabs;
    }
    async update(id, button) {
        let tabs = await this.navbarModel.findOneAndUpdate({ _id: id }, button, {
            new: true,
        });
        return tabs;
    }
    async scssToCss(scss) {
        try {
            let css = sass.renderSync({
                data: scss,
                outputStyle: 'compressed',
            });
            return css.css.toString();
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        const tabs = await this.navbarModel
            .findById(id)
            .remove()
            .exec();
        return tabs;
    }
};
NavbarService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Navbar')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], NavbarService);
exports.NavbarService = NavbarService;
//# sourceMappingURL=navbar.service.js.map