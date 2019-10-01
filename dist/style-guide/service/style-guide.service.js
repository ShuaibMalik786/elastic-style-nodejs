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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const sass = require('node-sass');
let StyleGuideService = class StyleGuideService {
    constructor(buttonModel, tabsModel, styleGuideModel, formModel, badgeModel, cardModel, tooltipModel, popoverModel, alertModel, StyleGuideConfigModel) {
        this.buttonModel = buttonModel;
        this.tabsModel = tabsModel;
        this.styleGuideModel = styleGuideModel;
        this.formModel = formModel;
        this.badgeModel = badgeModel;
        this.cardModel = cardModel;
        this.tooltipModel = tooltipModel;
        this.popoverModel = popoverModel;
        this.alertModel = alertModel;
        this.StyleGuideConfigModel = StyleGuideConfigModel;
    }
    async findAll() {
        const buttons = await this.styleGuideModel.find().populate('button tab');
        return buttons;
    }
    async findAllComponents() {
        const buttons = await this.buttonModel.find();
        const tabs = await this.tabsModel.find();
        const forms = await this.formModel.find();
        const badges = await this.badgeModel.find();
        const cards = await this.cardModel.find();
        const tooltips = await this.tooltipModel.find();
        const popovers = await this.popoverModel.find();
        const alerts = await this.alertModel.find();
        const colors = await this.StyleGuideConfigModel.find({ active: true });
        const temp = {
            buttons: buttons,
            tabs: tabs,
            forms: forms,
            badges: badges,
            cards: cards,
            tooltips: tooltips,
            popovers: popovers,
            alerts: alerts,
            colors: colors,
        };
        return temp;
    }
    async findOne(id) {
        const buttons = await this.styleGuideModel.findById(id).populate('button tab');
        return buttons;
    }
    async add(styleGuide) {
        const model = new this.styleGuideModel({ data: styleGuide });
        const temp = await model.save();
        return temp;
    }
    async update(id, button) {
        let buttons = await this.styleGuideModel.findOneAndUpdate({ _id: id }, button, {
            new: true,
        });
        return buttons;
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
        const buttons = await this.styleGuideModel
            .findById(id)
            .remove()
            .exec();
        return buttons;
    }
};
StyleGuideService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Button')),
    __param(1, mongoose_1.InjectModel('Tabs')),
    __param(2, mongoose_1.InjectModel('StyleGuide')),
    __param(3, mongoose_1.InjectModel('Form')),
    __param(4, mongoose_1.InjectModel('Badge')),
    __param(5, mongoose_1.InjectModel('Card')),
    __param(6, mongoose_1.InjectModel('Tooltip')),
    __param(7, mongoose_1.InjectModel('Popover')),
    __param(8, mongoose_1.InjectModel('Alert')),
    __param(9, mongoose_1.InjectModel('StyleGuideConfig')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _f : Object, typeof (_g = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _g : Object, typeof (_h = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _h : Object, typeof (_j = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _j : Object, typeof (_k = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _k : Object])
], StyleGuideService);
exports.StyleGuideService = StyleGuideService;
//# sourceMappingURL=style-guide.service.js.map