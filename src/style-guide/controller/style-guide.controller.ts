import { Controller, Get, Post, Body, Delete, Param, Res } from '@nestjs/common';
import { StyleGuideService } from '../service/style-guide.service';
import { Response } from 'express';

var fs = require('fs');

@Controller('api/style-guide')
export class StyleGuideController {

  constructor(private readonly styleGuideService: StyleGuideService) {
  }

  @Get()
  async getAll() {
    let components = await this.styleGuideService.findAll();
    return components;
  }

  @Get('uiComponents')
  async getAllComponents() {
    let components = await this.styleGuideService.findAllComponents();
    return components;
  }

  @Get('user/:userId')
  async getUserSGs(@Param('userId') userId) {
    const components = await this.styleGuideService.findUserSGs(userId);
    return components;
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    const components = await this.styleGuideService.findOne(id);
    return components;
  }

  @Post()
  async create(@Body() styleGuide, @Res() response: Response) {
    const stGuide = await this.styleGuideService.add(styleGuide);
    await fs.writeFile('./temp/elasticStyle.css', stGuide.data.css, (err) => {
      if (err) {
        throw err;
      }
      return response.download('./temp/elasticStyle.css');
    });
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    let temp = await this.styleGuideService.remove(id);
    return temp;
  }

  @Get('genrate/:id')
  async getStyleGuide(@Param('id') id, @Res() response: Response) {
    const temp = await this.styleGuideService.findOne(id);
    const file = fs.writeFile('./temp/mynewfile1.css', temp.tabsCss, (err) => {
      if (err) {
        throw err;
      }
    });
    // res.download(file); // Set disposition and send it.
    return response.download('./temp/mynewfile1.css');
  }

}
