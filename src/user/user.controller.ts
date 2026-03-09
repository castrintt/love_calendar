import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { UserServiceSymbol } from './user.container';
import { IUserController, type IUserService } from './user.interface';
import { type User, Event } from 'generated/prisma/client';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/users')
export class UserController implements IUserController {
  constructor(
    @Inject(UserServiceSymbol)
    private readonly userService: IUserService
  ) { }

  @Get('/find_all')
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get('/find_by_id')
  @HttpCode(HttpStatus.OK)
  findById(@Param() id: string): Promise<User | null> {
    return this.userService.findById(id)
  }

  @Post('/create_user')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() user: User): Promise<boolean> {
    return this.userService.create(user)
  }

  @Put('/update_user')
  @HttpCode(HttpStatus.OK)
  update(@Param() id: string, @Body() user: User): Promise<boolean> {
    return this.userService.update(id, user)
  }
  @Delete('/remove_user')
  @HttpCode(HttpStatus.OK)
  deleteById(@Param() id: string): Promise<boolean> {
    return this.userService.deleteById(id)
  }

  @Get('/find_user_events_by_user_id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 204, description: 'Nenhum usuario encontrado' })
  findUserEventsByUserId(@Param() id: string): Promise<Event[]> {
    return this.userService.findUserEventsByUserId(id)
  }
}
