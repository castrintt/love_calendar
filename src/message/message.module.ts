import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageControllerSymbol, MessageRepositorySymbol, MessageServiceSymbol } from './message.interface';
import { MessageRepository } from './message.repository';
import { MessageController } from './message.controller';

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
