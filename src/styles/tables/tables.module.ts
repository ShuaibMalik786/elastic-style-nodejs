import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TablesSchema } from './model/tables';
import { TablesService } from './service/tables.service';
import { TablesController } from './controller/tables.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Tables', schema: TablesSchema },
        ]),
    ],
    controllers: [TablesController],
    providers: [TablesService]
})
export class TablesModule { }
