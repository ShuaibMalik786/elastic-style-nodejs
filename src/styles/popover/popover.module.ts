import { Module } from '@nestjs/common';
import { PopoverSchema } from './model/popover';
import { MongooseModule } from '@nestjs/mongoose';
import { PopoverService } from './service/popover.service';
import { PopoverController } from './controller/popover.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Popover', schema: PopoverSchema },
        ]),
    ],
    controllers: [PopoverController],
    providers: [PopoverService]
})
export class PopoverModule { }
