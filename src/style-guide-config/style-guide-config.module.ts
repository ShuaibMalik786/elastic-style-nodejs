import { Module } from '@nestjs/common';
import { StyleGuideConfigController } from './controller/style-guide-config/style-guide-config.controller';
import { StyleGuideConfigService } from './service/style-guide-config/style-guide-config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StyleGuideConfigSchema } from './model/styleGuideConfig';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StyleGuideConfig', schema: StyleGuideConfigSchema },
    ]),
  ],
  controllers: [StyleGuideConfigController],
  providers: [StyleGuideConfigService],
})
export class StyleGuideConfigModule {}
