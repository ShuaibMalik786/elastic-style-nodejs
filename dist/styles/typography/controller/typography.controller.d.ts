import { TypographyService } from '../service/typography.service';
export declare class TypographyController {
    private readonly service;
    constructor(service: TypographyService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
