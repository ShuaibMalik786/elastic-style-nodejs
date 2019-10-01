import { Module } from '@nestjs/common';
import { ModalSchema } from './model/modal';
import { MongooseModule } from '@nestjs/mongoose';
import { ModalService } from './service/modal.service';
import { ModalController } from './controller/modal.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Modal', schema: ModalSchema  },
      ]),
    ],
    controllers: [ModalController],
    providers: [ModalService]
  })
export class ModalModule {}
