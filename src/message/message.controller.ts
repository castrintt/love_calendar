import { Controller, Inject } from '@nestjs/common';
import { type IMessageService } from './message.interface';
import { MessageServiceSymbol } from './message.container';

@Controller('/message')
export class MessageController {
  constructor(
    @Inject(MessageServiceSymbol)
    private readonly messageService: IMessageService
  ) { }
}
