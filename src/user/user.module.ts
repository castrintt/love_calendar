import { Module } from '@nestjs/common';
import { UserControllerSymbol, UserRespositorySymbol, UserServiceSymbol } from './user.container';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserServiceSymbol,
      useClass: UserService
    },
    {
      provide: UserRespositorySymbol,
      useClass: UserRepository
    },
    {
      provide: UserControllerSymbol,
      useClass: UserController
    }
  ],
  exports: []
})
export class UserModule { }
