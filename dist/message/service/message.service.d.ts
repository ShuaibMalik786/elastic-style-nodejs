import { Model } from 'mongoose';
export declare class MessageService {
    private readonly messageModel;
    constructor(messageModel: Model);
    create(room: any): Promise<any>;
}
