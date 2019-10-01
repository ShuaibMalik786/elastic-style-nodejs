import { PillsService } from '../service/pills.service';
export declare class PillsController {
    private readonly service;
    constructor(service: PillsService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
