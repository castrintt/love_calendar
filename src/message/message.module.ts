import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { MessageService } from './message.service';
import { MessageControllerSymbol, MessageRepositorySymbol, MessageServiceSymbol } from './message.container';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [
    {
      provide: MessageServiceSymbol,
      useClass: MessageService
    },
    {
      provide: MessageRepositorySymbol,
      useClass: MessageRepository
    },
    {
      provide: MessageControllerSymbol,
      useClass: MessageController
    }
  ],
  exports: []
})
export class MessageModule { }
