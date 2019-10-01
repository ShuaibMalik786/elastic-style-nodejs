import { NavbarService } from '../service/navbar.service';
export declare class NavbarController {
    private readonly service;
    constructor(service: NavbarService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
