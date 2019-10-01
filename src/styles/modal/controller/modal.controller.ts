import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ModalService } from '../service/modal.service';

@Controller('api/modal')
export class ModalController {
    constructor(private readonly service: ModalService) { }

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

        // update button with preview data
        buttonDto.previewScss = `#id${button._id}{${buttonDto.scss}}`;
        buttonDto.previewCss = await this.service.scssToCss(
            buttonDto.previewScss,
        );
        button = await this.service.update(button._id, buttonDto);
        return button;
    }

    @Put(':id')
    async update(@Body() buttonDto, @Param('id') id) {
        buttonDto.previewScss = `#id${id}{${buttonDto.scss}}`;
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