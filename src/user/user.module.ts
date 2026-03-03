import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserControllerSymbol, UserRespositorySymbol, UserServiceSymbol } from './user.interface';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
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
