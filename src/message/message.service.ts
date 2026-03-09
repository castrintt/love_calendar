import { Inject, Injectable } from '@nestjs/common';
import { type IMessageRepository, IMessageService } from './message.interface';
import { MessageRepositorySymbol } from './message.container';

@Injectable()
export class MessageService implements IMessageService {

    constructor(
        @Inject(MessageRepositorySymbol)
        private readonly messageRepository: IMessageRepository
    ) { }

}
