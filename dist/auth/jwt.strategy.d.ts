import { UserService } from './../user/service/user.service';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<any>;
}
export {};
