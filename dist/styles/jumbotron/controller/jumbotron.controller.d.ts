import { JumbotronService } from '../service/jumbotron.service';
export declare class JumboController {
    private readonly service;
    constructor(service: JumbotronService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
