import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TooltipSchema } from './model/tooltip';
import { TooltipService } from './service/tooltip.service';
import { TooltipController } from './controller/tooltip.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Tooltip', schema: TooltipSchema },
        ]),
    ],
    controllers: [TooltipController],
    providers: [TooltipService]
})
export class TooltipModule {}
