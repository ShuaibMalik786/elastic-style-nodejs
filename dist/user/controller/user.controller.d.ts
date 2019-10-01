import { Response } from 'express';
import { UserService } from '../service/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(res: Response): void;
    findOne(res: Response, id: any): void;
    register(request: Request, res: Response): void;
}
