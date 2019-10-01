import { UserService } from '../user/service/user.service';
import { Model } from 'mongoose';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly userModel;
    constructor(userService: UserService, jwtService: JwtService, userModel: Model);
    login(user: any, res: Response): Promise<any>;
    handleError(error: any, res: Response): void;
    genrateToken(user: any): {
        user: any;
        access_token: string;
    };
}
