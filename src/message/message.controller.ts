import { Controller, Inject } from '@nestjs/common';
import { type IMessageService, MessageServiceSymbol } from './message.interface';

@Controller('/message')
export class MessageController {
  constructor(
    @Inject(MessageServiceSymbol)
    private readonly messageService: IMessageService
  ) { }
}
