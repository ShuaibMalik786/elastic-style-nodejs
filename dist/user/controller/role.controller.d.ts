import { Request, Response } from 'express';
import { RoleService } from '../service/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    getAll(request: Request, res: Response): void;
    register(request: Request, res: Response): void;
}
