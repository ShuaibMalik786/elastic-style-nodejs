import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
const sass = require('node-sass');

@Injectable()
export class PillsService {
    constructor(@InjectModel('Pills') private readonly pillsModel: Model) { }

    async findAll() {
        const tabs = await this.pillsModel.find();
        return tabs;
    }

    async findOne(id) {
        const tabs = await this.pillsModel.findById(id);
        return tabs;
    }

    async add(button) {
        const model = new this.pillsModel(button);
        let tabs = await model.save();
        // temp = _.pick(temp, ['_id', 'name', 'email', 'createdAt', 'updatedAt']);
        // temp = await this.userModel.findById(temp._id).select("-password");
        return tabs;
    }

    async update(id, button) {
        let tabs = await this.pillsModel.findOneAndUpdate({ _id: id }, button, {
            new: true,
        });
        return tabs;
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
        const tabs = await this.pillsModel
            .findById(id)
            .remove()
            .exec();
        return tabs;
    }
}
