import { Response } from 'express';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Res, Body, UseGuards, Param, Put } from '@nestjs/common';
import { UserDto } from '../validator/user';
import { AuthService } from '../../auth/auth.service';
import { UserUpdateDto } from '../validator/userUpdate';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService,
              private readonly  authService: AuthService,
  ) {
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Res() res: Response) {
    this.userService.findAll(res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id) {
    this.userService.findOne(id, res);
  }

  @Post()
  create(@Body() user: UserDto) {
    const temp = this.userService.create(user);
    return temp;
  }

  @Post('/signUp')
  async register(@Body() user: UserDto) {
    const temp = await this.userService.create(user);
    const token = await this.authService.genrateToken(temp);
    return token;
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Body() user: UserUpdateDto, @Param('id') id) {
    const temp = this.userService.update(id, user);
    return temp;
  }
}
