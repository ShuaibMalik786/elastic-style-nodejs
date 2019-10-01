import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StyleGuideConfigService } from '../../service/style-guide-config/style-guide-config.service';

@Controller('api/style-guide-config')
export class StyleGuideConfigController {

  constructor(private readonly service: StyleGuideConfigService) {
  }

  @Get()
  async getAll() {
    const button = await this.service.findAll();
    return button;
  }

  @Get(':id') 
  async getOne(@Param('id') id) {
    const button = await this.service.findOne(id);
    return button;
  }

  @Post()
  async create(@Body() buttonDto) {
    // add button
    const button = await this.service.add(buttonDto);
    return button;
  }

  @Put(':id')
  async update(@Body() buttonDto, @Param('id') id) {
    const button = await this.service.update(id, buttonDto);
    return button;
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    const button = await this.service.remove(id);
    return button;
  }
}
