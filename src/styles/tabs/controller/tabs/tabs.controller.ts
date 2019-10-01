import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    Put,
} from '@nestjs/common';
import { TabsService } from '../../service/tabs/tabs.service';

@Controller('api/tabs')
export class TabsController {
    constructor(private readonly tabsService: TabsService) { }

    @Get()
    async getAll() {
        let button = await this.tabsService.findAll();
        return button;
    }

    @Get(':id')
    async getOne(@Param('id') id) {
        let button = await this.tabsService.findOne(id);
        return button;
    }

    @Post()
    async create(@Body() buttonDto) {
        //add button
        let css = await this.tabsService.scssToCss(buttonDto.scss);
        buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        buttonDto['previewScss'] = buttonDto.scss;
        let button = await this.tabsService.add(buttonDto);

        // update button with preview data
        buttonDto.previewScss = `#id${button._id}{${buttonDto.scss}}`;
        buttonDto.previewCss = await this.tabsService.scssToCss(
            buttonDto.previewScss,
        );
        button = await this.tabsService.update(button._id, buttonDto);
        return button;
    }

    @Put(':id')
    async update(@Body() buttonDto, @Param('id') id) {
        buttonDto.previewScss = `#id${id}{${buttonDto.scss}}`;
        let css = await this.tabsService.scssToCss(buttonDto.previewScss);
      buttonDto['css'] = css;
        buttonDto['previewCss'] = css;
        let button = await this.tabsService.update(id, buttonDto);
        return button;
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        let button = await this.tabsService.remove(id);
        return button;
    }
}