import { Module } from '@nestjs/common';
import { StyleGuideController } from './controller/style-guide.controller';
import { StyleGuideService } from './service/style-guide.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ButtonSchema } from '../styles/button/model/button.model';
import { StyleGuideSchema } from './model/styleGuide.model';
import { TabsSchema } from '../styles/tabs/model/tabs';
import { FormsSchema } from '../styles/forms/model/forms';
import { BadgeSchema } from '../styles/badge/model/badge';
import { CardSchema } from '../styles/card/model/card';
import { TooltipSchema } from '../styles/tooltip/model/tooltip';
import { PopoverSchema } from '../styles/popover/model/popover';
import { AlertSchema } from '../styles/alert/model/alert';
import { StyleGuideConfigSchema } from '../style-guide-config/model/styleGuideConfig';
import { TypographySchema } from '../styles/typography/model/typography';
import { ModalSchema } from '../styles/modal/model/modal';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Button', schema: ButtonSchema },
      { name: 'StyleGuide', schema: StyleGuideSchema },
      { name: 'Tabs', schema: TabsSchema },
      { name: 'Form', schema: FormsSchema },
      { name: 'Badge', schema: BadgeSchema },
      { name: 'Card', schema: CardSchema },
      { name: 'Tooltip', schema: TooltipSchema },
      { name: 'Popover', schema: PopoverSchema },
      { name: 'Alert', schema: AlertSchema },
      { name: 'StyleGuideConfig', schema: StyleGuideConfigSchema },
      { name: 'Typography', schema: TypographySchema },
      { name: 'Modal', schema: ModalSchema },
    ]),
  ],
  controllers: [StyleGuideController],
  providers: [StyleGuideService],
})
export class StyleGuideModule {
}
