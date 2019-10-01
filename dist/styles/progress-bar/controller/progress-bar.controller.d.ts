import { ProgressBarService } from '../service/progress-bar.service';
export declare class ProgressbarController {
    private readonly service;
    constructor(service: ProgressBarService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
