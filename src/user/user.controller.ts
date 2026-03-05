import { Controller, Inject } from '@nestjs/common';
import { UserServiceSymbol } from './user.container';
import { IUserController, type IUserService } from './user.interface';

@Controller('/users')
export class UserController implements IUserController {
  constructor(
    @Inject(UserServiceSymbol)
    private readonly userService: IUserService
  ) { }
}
