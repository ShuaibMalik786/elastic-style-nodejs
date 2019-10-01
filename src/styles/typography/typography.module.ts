import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypographySchema } from './model/typography';
import { TypographyService } from './service/typography.service';
import { TypographyController } from './controller/typography.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Typography', schema: TypographySchema },
        ]),
    ],
    controllers: [TypographyController],
    providers: [TypographyService]
})
export class TypographyModule {}
