import { Model } from 'mongoose';
import { Response } from 'express';
export declare class UserService {
    private readonly userModel;
    errorDetails: {
        error: string;
    };
    constructor(userModel: Model);
    findAll(res: Response): Promise<void>;
    create(user: any, res: Response): Promise<void>;
    update(id: any, user: any, res: Response): Promise<void>;
    findOne(id: any, res: Response): Promise<void>;
    getOne(id: any): Promise<any>;
    handleError(error: any, res: Response): void;
}
