import { Model } from 'mongoose';
import { Response } from 'express';
export declare class HandelErrorService {
    private readonly roleModel;
    constructor(roleModel: Model);
    handleError(error: any, res: Response): void;
}
