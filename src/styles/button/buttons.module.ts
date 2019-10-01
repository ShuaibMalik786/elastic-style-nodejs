import { ButtonController } from './controller/button.controller';
import { ButtonSchema } from './model/button.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ButtonService } from './service/button.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Button', schema: ButtonSchema },
    ]),
  ],
  providers: [ButtonService],
  controllers: [ButtonController]
})
export class ButtonsModule {}
