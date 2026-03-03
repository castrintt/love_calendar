import { Controller, Inject } from '@nestjs/common';
import { IUserController, type IUserService, UserServiceSymbol } from './user.interface';

@Controller('/users')
export class UserController implements IUserController {
  constructor(
    @Inject(UserServiceSymbol)
    private readonly userService: IUserService
  ) { }
}
