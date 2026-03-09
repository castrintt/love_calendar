import { Controller, Inject } from '@nestjs/common';
import { type IEventService, IEventController } from './event.interface';
import { EventServiceSymbol } from './event.container';

@Controller('/event')
export class EventController implements IEventController {
  constructor(
    @Inject(EventServiceSymbol)
    private readonly eventService: IEventService
  ) { }
}
