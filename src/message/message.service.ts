import { Inject, Injectable } from '@nestjs/common';
import { type IMessageRepository, IMessageService, MessageRepositorySymbol } from './message.interface';

@Injectable()
export class MessageService implements IMessageService {

    constructor(
        @Inject(MessageRepositorySymbol)
        private readonly messageRepository: IMessageRepository
    ) { }

}
