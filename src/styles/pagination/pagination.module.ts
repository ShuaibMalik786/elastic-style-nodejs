import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaginationSchema } from './model/pagination';
import { PaginationService } from './service/pagination.service';
import { PaginationController } from './controller/pagination.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Pagination', schema: PaginationSchema  },
      ]),
    ],
    controllers: [PaginationController],
    providers: [PaginationService]
  })
export class PaginationModule {}
