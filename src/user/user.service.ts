import { Inject, Injectable } from '@nestjs/common';
import { Event, User } from 'generated/prisma/client';
import { UserRespositorySymbol } from './user.container';
import { type IUserRepository, IUserService, } from './user.interface';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject(UserRespositorySymbol)
        private readonly userRepository: IUserRepository
    ) { }
    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll()
    }
    async findById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id)
    }
    async create(data: User): Promise<boolean> {
        return await this.userRepository.create(data)
    }
    async update(id: string, data: User): Promise<boolean> {
        return await this.userRepository.update(id, data)
    }
    async deleteById(id: string): Promise<boolean> {
        return await this.userRepository.deleteByid(id)
    }
    async findUserEventsByUserId(id: string): Promise<Event[]> {
        return await this.userRepository.findUserEventsByUserId(id)
    }
}
