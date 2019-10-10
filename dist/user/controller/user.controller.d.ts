import { Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../validator/user';
import { AuthService } from '../../auth/auth.service';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    findAll(res: Response): void;
    findOne(res: Response, id: any): void;
    create(user: UserDto): Promise<any>;
    register(user: UserDto): Promise<{
        user: any;
        access_token: string;
    }>;
    update(user: UserDto, id: any): Promise<any>;
}
