import { Inject, Injectable } from '@nestjs/common';
import { type IEventRepository, IEventService } from './event.interface';
import { EventRepositorySymbol } from './event.container';

@Injectable()
export class EventService implements IEventService {
    constructor(
        @Inject(EventRepositorySymbol)
        private readonly eventRepository: IEventRepository
    ) { }

}
