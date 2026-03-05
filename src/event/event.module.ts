import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventRepository } from './event.repository';
import { EventService } from './event.service';
import { EventControllerSymbol, EventRepositorySymbol, EventServiceSymbol } from './event.container';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [
    {
      provide: EventServiceSymbol,
      useClass: EventService
    },
    {
      provide: EventRepositorySymbol,
      useClass: EventRepository
    },
    {
      provide: EventControllerSymbol,
      useClass: EventController
    }
  ],
  exports: [],
})
export class EventModule { }
