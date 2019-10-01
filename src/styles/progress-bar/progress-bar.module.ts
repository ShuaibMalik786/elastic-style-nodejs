import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgressBarSchema } from './model/progress-bar';
import { ProgressBarService } from './service/progress-bar.service';
import { ProgressbarController } from './controller/progress-bar.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'ProgressBar', schema: ProgressBarSchema },
        ]),
    ],
    controllers: [ProgressbarController],
    providers: [ProgressBarService]
})
export class BrogressBarModule { }
