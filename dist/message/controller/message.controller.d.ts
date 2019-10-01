import { MessageService } from './../service/message.service';
import { MessageDto } from './../validation/message';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getAll(): string;
    createRoom(roomDto: MessageDto): Promise<any>;
}
