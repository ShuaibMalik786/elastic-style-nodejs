import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BadgeSchema } from './model/badge';
import { BadgeService } from './service/badge.service';
import { BadgeController } from './controller/badge.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Badge', schema: BadgeSchema },
      ]),
    ],
    controllers: [BadgeController],
    providers: [BadgeService]
  })
export class BadgeModule {}
