import { Controller, Inject } from '@nestjs/common';
import { type IEventService, EventServiceSymbol, IEventController } from './event.interface';

@Controller('/event')
export class EventController implements IEventController {
  constructor(
    @Inject(EventServiceSymbol)
    private readonly eventService: IEventService
  ) { }
}
