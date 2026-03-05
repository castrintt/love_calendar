import { Inject, Injectable } from '@nestjs/common';
import { type IEventRepository, EventRepositorySymbol, IEventService } from './event.interface';

@Injectable()
export class EventService implements IEventService {
    constructor(
        @Inject(EventRepositorySymbol)
        private readonly eventRepository: IEventRepository
    ) { }

}
