import { PaginationService } from '../service/pagination.service';
export declare class PaginationController {
    private readonly service;
    constructor(service: PaginationService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
