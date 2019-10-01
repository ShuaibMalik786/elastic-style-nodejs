import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PillsSchema } from './model/pills';
import { PillsService } from './service/pills.service';
import { PillsController } from './controller/pills.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Pills', schema: PillsSchema  },
      ]),
    ],
    controllers: [PillsController],
    providers: [PillsService]
  })
export class PillsModule {}
