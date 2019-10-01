import { BadgeService } from '../service/badge.service';
export declare class BadgeController {
    private readonly service;
    constructor(service: BadgeService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
