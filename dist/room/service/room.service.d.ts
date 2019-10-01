import { Model } from 'mongoose';
export declare class RoomService {
    private readonly roomModel;
    constructor(roomModel: Model);
    create(room: any): Promise<any>;
}
