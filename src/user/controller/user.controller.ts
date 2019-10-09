import { Response } from 'express';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Res, Body, UseGuards, Param, Put } from '@nestjs/common';
import { UserDto } from '../validator/user';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {
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
  register(@Body() user: UserDto) {
    const temp = this.userService.create(user);
    return temp;
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Body() user: UserDto, @Param('id') id) {
    const temp = this.userService.update(id, user);
    return temp;
  }
}
