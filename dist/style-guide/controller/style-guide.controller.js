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
const common_1 = require("@nestjs/common");
const style_guide_service_1 = require("../service/style-guide.service");
var fs = require('fs');
let StyleGuideController = class StyleGuideController {
    constructor(styleGuideService) {
        this.styleGuideService = styleGuideService;
    }
    async getAll() {
        let components = await this.styleGuideService.findAll();
        return components;
    }
    async getAllComponents() {
        let components = await this.styleGuideService.findAllComponents();
        return components;
    }
    async getUserSGs(userId) {
        const components = await this.styleGuideService.findUserSGs(userId);
        return components;
    }
    async getOne(id) {
        const components = await this.styleGuideService.findOne(id);
        return components;
    }
    async create(styleGuide, response) {
        const stGuide = await this.styleGuideService.add(styleGuide);
        await fs.writeFile('./temp/elasticStyle.css', stGuide.data.css, (err) => {
            if (err) {
                throw err;
            }
            return response.download('./temp/elasticStyle.css');
        });
    }
    async delete(id) {
        let temp = await this.styleGuideService.remove(id);
        return temp;
    }
    async getStyleGuide(id, response) {
        const temp = await this.styleGuideService.findOne(id);
        const file = fs.writeFile('./temp/mynewfile1.css', temp.tabsCss, (err) => {
            if (err) {
                throw err;
            }
        });
        return response.download('./temp/mynewfile1.css');
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "getAll", null);
__decorate([
    common_1.Get('uiComponents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "getAllComponents", null);
__decorate([
    common_1.Get('user/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "getUserSGs", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "delete", null);
__decorate([
    common_1.Get('genrate/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StyleGuideController.prototype, "getStyleGuide", null);
StyleGuideController = __decorate([
    common_1.Controller('api/style-guide'),
    __metadata("design:paramtypes", [style_guide_service_1.StyleGuideService])
], StyleGuideController);
exports.StyleGuideController = StyleGuideController;
//# sourceMappingURL=style-guide.controller.js.map