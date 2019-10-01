import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

const sass = require('node-sass');

@Injectable()
export class StyleGuideService {
  constructor(
    @InjectModel('Button') private readonly buttonModel: Model,
    @InjectModel('Tabs') private readonly tabsModel: Model,
    @InjectModel('StyleGuide') private readonly styleGuideModel: Model,
    @InjectModel('Form') private readonly formModel: Model,
    @InjectModel('Badge') private readonly badgeModel: Model,
    @InjectModel('Card') private readonly cardModel: Model,
    @InjectModel('Tooltip') private readonly tooltipModel: Model,
    @InjectModel('Popover') private readonly popoverModel: Model,
    @InjectModel('Alert') private readonly alertModel: Model,
    @InjectModel('StyleGuideConfig') private readonly StyleGuideConfigModel: Model,
  ) {
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
    // temp = _.pick(temp, ['_id', 'name', 'email', 'createdAt', 'updatedAt']);
    // temp = await this.userModel.findById(temp._id).select("-password");
    return temp;
  }

  async update(id, button) {
    let buttons = await this.styleGuideModel.findOneAndUpdate({ _id: id }, button, {
      new: true,
    });
    return buttons;
  }

  async scssToCss(scss: any) {
    try {
      let css = sass.renderSync({
        data: scss,
        outputStyle: 'compressed',
      });
      return css.css.toString();
    } catch (e) {
      throw new HttpException(
        e,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id) {
    const buttons = await this.styleGuideModel
      .findById(id)
      .remove()
      .exec();
    return buttons;
  }
}
