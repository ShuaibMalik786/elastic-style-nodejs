import { Module } from '@nestjs/common';
import { TabsController } from './controller/tabs/tabs.controller';
import { TabsService } from './service/tabs/tabs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TabsSchema } from './model/tabs';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tabs', schema: TabsSchema },
    ]),
  ],
  controllers: [TabsController],
  providers: [TabsService]
})
export class TabsModule { }