import { StyleGuideService } from '../service/style-guide.service';
import { Response } from 'express';
export declare class StyleGuideController {
    private readonly styleGuideService;
    constructor(styleGuideService: StyleGuideService);
    getAll(): Promise<any>;
    getAllComponents(): Promise<{
        buttons: any;
        tabs: any;
        forms: any;
        badges: any;
        cards: any;
        tooltips: any;
        popovers: any;
        alerts: any;
        colors: any;
    }>;
    getOne(id: any): Promise<any>;
    create(styleGuide: any, response: Response): Promise<void>;
    delete(id: any): Promise<any>;
    getStyleGuide(id: any, response: Response): Promise<void>;
}
