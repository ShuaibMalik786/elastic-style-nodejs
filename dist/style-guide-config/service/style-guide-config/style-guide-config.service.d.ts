import { Model } from 'mongoose';
export declare class StyleGuideConfigService {
    private readonly styleGuideConfigModel;
    constructor(styleGuideConfigModel: Model);
    findAll(): Promise<any>;
    findOne(id: any): Promise<any>;
    add(button: any): Promise<any>;
    update(id: any, button: any): Promise<any>;
    remove(id: any): Promise<any>;
}
