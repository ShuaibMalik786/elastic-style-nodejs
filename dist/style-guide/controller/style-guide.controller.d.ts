import { StyleGuideService } from '../service/style-guide.service';
import { Response } from 'express';
export declare class StyleGuideController {
    private readonly styleGuideService;
    constructor(styleGuideService: StyleGuideService);
    getAll(): Promise<any>;
    getAllComponents(): Promise<{
        colors: any;
        components: any[];
    }>;
    getUserSGs(userId: any): Promise<any>;
    getOne(id: any): Promise<any>;
    create(styleGuide: any, response: Response): Promise<void>;
    delete(id: any): Promise<any>;
    getStyleGuide(id: any, response: Response): Promise<void>;
}
