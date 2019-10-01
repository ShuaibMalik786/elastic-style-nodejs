import { RoomService } from '../service/room.service';
import { RoomDto } from '../validation/room';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getHello(): string;
    createRoom(roomDto: RoomDto): Promise<any>;
}
