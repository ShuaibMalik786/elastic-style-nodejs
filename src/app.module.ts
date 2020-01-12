import { ConfigModule } from './config/config.module';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpErrorFilter } from './core/filter/http-error.filter';
import { LoggingInterceptor } from './core/inercepor/logging.interceptor';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { ButtonsModule } from './styles/button/buttons.module';
import { StyleGuideModule } from './style-guide/style-guide.module';
import { TabsModule } from './styles/tabs/tabs.module';
import { AlertModule } from './styles/alert/alert.module';
import { BadgeModule } from './styles/badge/badge.module';
import { CardModule } from './styles/card/card.module';
import { FormsModule } from './styles/forms/forms.module';
import { JumbotronModule } from './styles/jumbotron/jumbotron.module';
import { ModalModule } from './styles/modal/modal.module';
import { NavbarModule } from './styles/navbar/navbar.module';
import { PaginationModule } from './styles/pagination/pagination.module';
import { PillsModule } from './styles/pills/pills.module';
import { PopoverModule } from './styles/popover/popover.module';
import { BrogressBarModule } from './styles/progress-bar/progress-bar.module';
import { TablesModule } from './styles/tables/tables.module';
import { TooltipModule } from './styles/tooltip/tooltip.module';
import { TypographyModule } from './styles/typography/typography.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigService } from './config/service/config.service';
import { StyleGuideConfigModule } from './style-guide-config/style-guide-config.module';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../elastic-style-angular/dist/admin'), // home
      // rootPath: join(__dirname, '../angular/dist/admin'), // heroku
    }),
    AuthModule,
    RoomModule,
    MessageModule,
    ButtonsModule,
    StyleGuideModule,
    TabsModule,
    AlertModule,
    BadgeModule,
    CardModule,
    FormsModule,
    JumbotronModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PillsModule,
    PopoverModule,
    BrogressBarModule,
    TablesModule,
    TooltipModule,
    TypographyModule,
    StyleGuideConfigModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {
}
