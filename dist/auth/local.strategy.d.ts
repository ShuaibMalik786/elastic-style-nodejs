import { Strategy } from 'passport-local';
import { Model } from 'mongoose';
import { Response } from 'express';
declare const LocalStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userModel;
    constructor(userModel: Model);
    validate(user: any, res: Response): Promise<any>;
    handleError(error: any, res: Response): void;
}
export {};
