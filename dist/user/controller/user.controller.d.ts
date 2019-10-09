import { Response } from 'express';
import { UserService } from '../service/user.service';
import { UserDto } from '../validator/user';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(res: Response): void;
    findOne(res: Response, id: any): void;
    register(user: UserDto): Promise<any>;
    update(user: UserDto, id: any): Promise<any>;
}
