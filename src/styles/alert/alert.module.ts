import { Module } from '@nestjs/common';
import { AlertController } from './controller/alert/alert.controller';
import { AlertService } from './service/alert/alert.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AlertSchema } from './model/alert';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Alert', schema: AlertSchema },
    ]),
  ],
  controllers: [AlertController],
  providers: [AlertService],
})
export class AlertModule { }
