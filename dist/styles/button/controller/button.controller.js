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
const button_service_1 = require("../service/button.service");
const common_1 = require("@nestjs/common");
let ButtonController = class ButtonController {
    constructor(buttonService) {
        this.buttonService = buttonService;
    }
    async getAll() {
        let button = await this.buttonService.findAll();
        return button;
    }
    async getOne(id) {
        let button = await this.buttonService.findOne(id);
        return button;
    }
    async create(buttonDto) {
        let css = await this.buttonService.scssToCss(buttonDto.scss);
        buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        buttonDto['previewScss'] = buttonDto.scss;
        let button = await this.buttonService.add(buttonDto);
        buttonDto.previewScss = `#id${button._id}{${buttonDto.scss}}`;
        buttonDto.previewCss = await this.buttonService.scssToCss(buttonDto.previewScss);
        button = await this.buttonService.update(button._id, buttonDto);
        return buttonDto;
    }
    async update(buttonDto, id) {
        buttonDto.previewScss = `#id${id}{${buttonDto.scss}}`;
        let css = await this.buttonService.scssToCss(buttonDto.previewScss);
        buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        let button = await this.buttonService.update(id, buttonDto);
        return button;
    }
    async delete(id) {
        let button = await this.buttonService.remove(id);
        return button;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ButtonController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ButtonController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ButtonController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ButtonController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ButtonController.prototype, "delete", null);
ButtonController = __decorate([
    common_1.Controller('api/admin/button'),
    __metadata("design:paramtypes", [button_service_1.ButtonService])
], ButtonController);
exports.ButtonController = ButtonController;
//# sourceMappingURL=button.controller.js.map