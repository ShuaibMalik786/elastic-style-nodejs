import { ButtonService } from '../service/button.service';
export declare class ButtonController {
    private readonly buttonService;
    constructor(buttonService: ButtonService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
