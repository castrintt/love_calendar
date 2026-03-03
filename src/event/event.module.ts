import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventControllerSymbol, EventRepositorySymbol, EventServiceSymbol } from './event.interface';
import { EventRepository } from './event.repository';
import { EventService } from './event.service';

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
