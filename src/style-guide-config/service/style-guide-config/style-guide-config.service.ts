import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class StyleGuideConfigService {
  constructor(@InjectModel('StyleGuideConfig') private readonly styleGuideConfigModel: Model) {
  }

  async findAll() {
    const tabs = await this.styleGuideConfigModel.find();
    return tabs;
  }

  async findOne(id) {
    const tabs = await this.styleGuideConfigModel.findById(id);
    return tabs;
  }

  async add(button) {
    const model = new this.styleGuideConfigModel(button);
    const tabs = await model.save();
    // temp = _.pick(temp, ['_id', 'name', 'email', 'createdAt', 'updatedAt']);
    // temp = await this.userModel.findById(temp._id).select("-password");
    return tabs;
  }

  async update(id, button) {
    const tabs = await this.styleGuideConfigModel.findOneAndUpdate({ _id: id }, button, {
      new: true,
    });
    return tabs;
  }

  async remove(id) {
    const tabs = await this.styleGuideConfigModel
      .findById(id)
      .remove()
      .exec();
    return tabs;
  }
}
