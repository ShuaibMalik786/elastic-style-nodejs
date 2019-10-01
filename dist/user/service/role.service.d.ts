import { Model } from 'mongoose';
import { Response } from 'express';
export declare class RoleService {
    private readonly roleModel;
    constructor(roleModel: Model);
    create(role: any, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    handleError(error: any, res: Response): void;
}
