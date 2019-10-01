import { CardService } from '../service/card.service';
export declare class CardController {
    private readonly service;
    constructor(service: CardService);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    create(buttonDto: any): Promise<any>;
    update(buttonDto: any, id: any): Promise<any>;
    delete(id: any): Promise<any>;
}
