import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Event } from "../../generated/prisma/client";
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

    async findUserEvents(id: string): Promise<Event[]> {
        const user = await this.prisma.user.findFirst({
            where: { id },
            include: { events: true }
        })
        if (!user) return []
        return user.events
    }

    async create(data: User): Promise<boolean> {
        return await this.prisma.user.create({ data }).then(() => true).catch(() => false)
    }
    async update(id: string, data: User): Promise<boolean> {
        return await this.prisma.user.update({ where: { id }, data }).then(() => true).catch(() => false)
    }
    async delete(id: string): Promise<boolean> {
        return await this.prisma.user.delete({ where: { id } }).then(() => true).catch(() => false)
    }

}
