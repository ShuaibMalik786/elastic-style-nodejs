import { TabsService } from '../../service/tabs/tabs.service';
export declare class TabsController {
    private readonly tabsService;
    constructor(tabsService: TabsService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
