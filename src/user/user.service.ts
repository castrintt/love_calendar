import { Inject, Injectable } from '@nestjs/common';
import { type IUserRepository, IUserService, UserRespositorySymbol } from './user.interface';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject(UserRespositorySymbol)
        private readonly userRepository: IUserRepository
    ) { }
}
