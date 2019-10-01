import { ModalService } from '../service/modal.service';
export declare class ModalController {
    private readonly service;
    constructor(service: ModalService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
