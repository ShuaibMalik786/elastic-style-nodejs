import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardSchema } from './model/card';
import { CardService } from './service/card.service';
import { CardController } from './controller/card.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Card', schema: CardSchema  },
      ]),
    ],
    controllers: [CardController],
    providers: [CardService]
  })
  export class CardModule {}
