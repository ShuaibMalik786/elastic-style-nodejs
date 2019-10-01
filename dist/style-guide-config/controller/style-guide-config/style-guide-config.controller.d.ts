import { StyleGuideConfigService } from '../../service/style-guide-config/style-guide-config.service';
export declare class StyleGuideConfigController {
    private readonly service;
    constructor(service: StyleGuideConfigService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
