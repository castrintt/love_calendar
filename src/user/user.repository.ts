import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Event, User } from "../../generated/prisma/client";
import { IUserRepository } from "./user.interface";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany()
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: { id }
        })
        if (!user) return null
        return user
    }

    async findUserEventsByUserId(id: string): Promise<Event[]> {
        const user = await this.prisma.user.findFirst({
            where: { id },
            include: { events: true }
        })
        if (!user) return []
        return user.events
    }

    async create(user: User): Promise<boolean> {
        return await this.prisma.user.create({ data: user }).then(() => true).catch(() => false)
    }
    async update(id: string, user: User): Promise<boolean> {
        return await this.prisma.user.update({ where: { id }, data: user }).then(() => true).catch(() => false)
    }
    async deleteByid(id: string): Promise<boolean> {
        return await this.prisma.user.delete({ where: { id } }).then(() => true).catch(() => false)
    }

}
