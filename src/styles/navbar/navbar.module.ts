import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavbarSchema } from './model/navbar';
import { NavbarService } from './service/navbar.service';
import { NavbarController } from './controller/navbar.controller';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Navbar', schema: NavbarSchema  },
      ]),
    ],
    controllers: [NavbarController],
    providers: [NavbarService]
  })
export class NavbarModule {}
