import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsSchema } from './model/forms';
import { FormsService } from './service/forms.service';
import { FormController } from './controller/forms.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Forms', schema: FormsSchema },
      ]),
    ],
    controllers: [FormController],
    providers: [FormsService]
  })
export class FormsModule {}
