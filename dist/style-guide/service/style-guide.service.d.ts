import { Model } from 'mongoose';
export declare class StyleGuideService {
    private readonly buttonModel;
    private readonly tabsModel;
    private readonly styleGuideModel;
    private readonly formModel;
    private readonly badgeModel;
    private readonly cardModel;
    private readonly tooltipModel;
    private readonly popoverModel;
    private readonly alertModel;
    private readonly StyleGuideConfigModel;
    constructor(buttonModel: Model, tabsModel: Model, styleGuideModel: Model, formModel: Model, badgeModel: Model, cardModel: Model, tooltipModel: Model, popoverModel: Model, alertModel: Model, StyleGuideConfigModel: Model);
    findAll(): Promise<any>;
    findAllComponents(): Promise<{
        colors: any;
        components: any[];
    }>;
    findOne(id: any): Promise<any>;
    add(styleGuide: any): Promise<any>;
    update(id: any, button: any): Promise<any>;
    scssToCss(scss: any): Promise<any>;
    remove(id: any): Promise<any>;
}
