import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PopoverService } from '../service/popover.service';

@Controller('api/popover')
export class PopoverController {
    constructor(private readonly service: PopoverService) { }

    @Get()
    async getAll() {
        let button = await this.service.findAll();
        return button;
    }

    @Get(':id')
    async getOne(@Param('id') id) {
        let button = await this.service.findOne(id);
        return button;
    }

    @Post()
    async create(@Body() buttonDto) {
        //add button
        let css = await this.service.scssToCss(buttonDto.scss);
        buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        buttonDto['previewScss'] = buttonDto.scss;
        let button = await this.service.add(buttonDto);
        return button;
    }

    @Put(':id')
    async update(@Body() buttonDto, @Param('id') id) {
        buttonDto.previewScss = `${buttonDto.scss}`;
        let css = await this.service.scssToCss(buttonDto.previewScss);
      buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        let button = await this.service.update(id, buttonDto);
        return button;
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        let button = await this.service.remove(id);
        return button;
    }
}