import { Event, User } from "../../generated/prisma/client";

export interface IUserRepository {
    findAll(): Promise<User[]>
    findById(id: string): Promise<User | null>
    create(user: User): Promise<boolean>
    update(id: string, user: User): Promise<boolean>
    deleteByid(id: string): Promise<boolean>
    findUserEventsByUserId(id: string): Promise<Event[]>
}

export interface IUserService {
    findAll(): Promise<User[]>
    findById(id: string): Promise<User | null>
    create(user: User): Promise<boolean>
    update(id: string, user: User): Promise<boolean>
    deleteById(id: string): Promise<boolean>
    findUserEventsByUserId(id: string): Promise<Event[]>
}

export interface IUserController {
    findAll(): Promise<User[]>
    findById(id: string): Promise<User | null>
    create(user: User): Promise<boolean>
    update(id: string, user: User): Promise<boolean>
    deleteById(id: string): Promise<boolean>
    findUserEventsByUserId(id: string): Promise<Event[]>
}