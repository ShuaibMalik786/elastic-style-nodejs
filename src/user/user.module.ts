import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserSchema } from './schema/user';
import { UserService } from './service/user.service';
import { RoleSchema } from './schema/role';
import { RoleController } from './controller/role.controller';
import { RoleService } from './service/role.service';
import { AuthService } from '../auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Role', schema: RoleSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [UserController, RoleController],
  providers: [UserService, RoleService, AuthService],
})
export class UserModule {
}
