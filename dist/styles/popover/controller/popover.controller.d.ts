import { PopoverService } from '../service/popover.service';
export declare class PopoverController {
    private readonly service;
    constructor(service: PopoverService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
