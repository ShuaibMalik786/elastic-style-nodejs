import { Module } from '@nestjs/common';
import { ConfigService } from './service/config.service';
import * as fs from 'fs';


@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`environments/${process.env.NODE_ENV || 'development'}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}