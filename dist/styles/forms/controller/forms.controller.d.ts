import { FormsService } from '../service/forms.service';
export declare class FormController {
    private readonly service;
    constructor(service: FormsService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
