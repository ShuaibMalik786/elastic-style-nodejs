import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JumbotronSchema } from './model/jumbotron';
import { JumbotronService } from './service/jumbotron.service';
import { JumboController } from './controller/jumbotron.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Jumbotron', schema: JumbotronSchema  },
      ]),
    ],
    controllers: [JumboController],
    providers: [JumbotronService]
  })
export class JumbotronModule {}
