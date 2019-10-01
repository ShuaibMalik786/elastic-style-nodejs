import { TablesService } from '../service/tables.service';
export declare class TablesController {
    private readonly service;
    constructor(service: TablesService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
