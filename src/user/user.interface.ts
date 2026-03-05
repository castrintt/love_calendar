import { User, Event } from "../../generated/prisma/client";

export interface IUserRepository {
    findAll(): Promise<User[]>
    findById(id: string): Promise<User | null>
    create(data: User): Promise<boolean>
    update(id: string, data: User): Promise<boolean>
    delete(id: string): Promise<boolean>
    findUserEvents(id: string): Promise<Event[]>
}

export interface IUserService {
}

export interface IUserController {
}