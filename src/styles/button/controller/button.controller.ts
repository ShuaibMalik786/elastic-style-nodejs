import { ButtonService } from '../service/button.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

@Controller('api/admin/button')
export class ButtonController {
  constructor(private readonly buttonService: ButtonService) {}

  @Get()
  async getAll() {
    let button = await this.buttonService.findAll();
    return button;
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    let button = await this.buttonService.findOne(id);
    return button;
  }

  @Post()
  async create(@Body() buttonDto) {
    //add button
    let css = await this.buttonService.scssToCss(buttonDto.scss);
    buttonDto['css'] = css;
    buttonDto['previewCss'] = css;
    buttonDto['previewScss'] = buttonDto.scss;
    let button = await this.buttonService.add(buttonDto);

    // update button with preview data to use id genrated
    buttonDto.previewScss = `#id${button._id}{${buttonDto.scss}}`;
    buttonDto.previewCss = await this.buttonService.scssToCss(
      buttonDto.previewScss,
    );
    button = await this.buttonService.update(button._id, buttonDto);
    return buttonDto;
  }

  @Put(':id')
  async update(@Body() buttonDto, @Param('id') id) {
    buttonDto.previewScss = `#id${id}{${buttonDto.scss}}`;
    let css = await this.buttonService.scssToCss(buttonDto.previewScss);
    buttonDto['css'] = css;
    buttonDto['previewCss'] = css;
    let button = await this.buttonService.update(id, buttonDto);
    return button;
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    let button = await this.buttonService.remove(id);
    return button;
  }
}
