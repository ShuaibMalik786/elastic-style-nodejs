import { TooltipService } from '../service/tooltip.service';
export declare class TooltipController {
    private readonly service;
    constructor(service: TooltipService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
