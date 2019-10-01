import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

const sass = require('node-sass');

@Injectable()
export class ButtonService {
  constructor(@InjectModel('Button') private readonly buttonModel: Model) {
  }

  async findAll() {
    const buttons = await this.buttonModel.find();
    return buttons;
  }

  async findOne(id) {
    const buttons = await this.buttonModel.findById(id);
    return buttons;
  }

  async add(button) {
    const model = new this.buttonModel(button);
    let buttons = await model.save();
    // temp = _.pick(temp, ['_id', 'name', 'email', 'createdAt', 'updatedAt']);
    // temp = await this.userModel.findById(temp._id).select("-password");
    return buttons;
  }

  async update(id, button) {
    let buttons = await this.buttonModel.findOneAndUpdate({ _id: id }, button, {
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
    }

    catch (e) {
      throw new HttpException(
        e,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id) {
    const buttons = await this.buttonModel
      .findById(id)
      .remove()
      .exec();
    return buttons;
  }
}
