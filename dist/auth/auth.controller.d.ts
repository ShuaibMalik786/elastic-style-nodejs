import { LoginReq } from './validation/login';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfile(req: any): any;
    login(LoginReq: LoginReq, res: any): void;
}
