import { Injectable } from "@nestjs/common";
import { IMessageRepository } from "./message.interface";

@Injectable()
export class MessageRepository implements IMessageRepository {
    
}