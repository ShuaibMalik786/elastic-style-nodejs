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
    // temporary variable to attach components and default color
    const temp = {
      colors: undefined,
      components: [],
    };

    // Attach components with there names
    const buttons = await this.buttonModel.find();
    let cmp = { name: 'Button', list: buttons };
    temp.components.push(cmp);
    const tabs = await this.tabsModel.find();
    cmp = { name: 'Tab', list: tabs };
    temp.components.push(cmp);
    const forms = await this.formModel.find();
    cmp = { name: 'Form', list: forms };
    temp.components.push(cmp);
    const badges = await this.badgeModel.find();
    cmp = { name: 'Badge', list: badges };
    temp.components.push(cmp);
    const cards = await this.cardModel.find();
    cmp = { name: 'Card', list: cards };
    temp.components.push(cmp);
    const tooltips = await this.tooltipModel.find();
    cmp = { name: 'Tooltip', list: tooltips };
    temp.components.push(cmp);
    const popovers = await this.popoverModel.find();
    cmp = { name: 'Popover', list: popovers };
    temp.components.push(cmp);
    const alerts = await this.alertModel.find();
    cmp = { name: 'Alert', list: alerts };
    temp.components.push(cmp);

    // Attach configured default color
    const colors = await this.StyleGuideConfigModel.find({ active: true });
    temp.colors = colors;
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
