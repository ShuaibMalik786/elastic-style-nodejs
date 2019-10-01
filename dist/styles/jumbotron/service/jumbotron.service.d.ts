import { Model } from 'mongoose';
export declare class JumbotronService {
    private readonly jumbotronModel;
    constructor(jumbotronModel: Model);
    findAll(): Promise<any>;
    findOne(id: any): Promise<any>;
    add(button: any): Promise<any>;
    update(id: any, button: any): Promise<any>;
    scssToCss(scss: any): Promise<any>;
    remove(id: any): Promise<any>;
}
