import { AlertService } from '../../service/alert/alert.service';
export declare class AlertController {
    private readonly service;
    constructor(service: AlertService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
