export const EventRepositorySymbol = Symbol('IEventRepository');
export const EventServiceSymbol = Symbol('IEventService');
export const EventControllerSymbol = Symbol('IEventController');

export interface IEventRepository {
    findAll(): string;
}

export interface IEventService {
    findAll(): string;
}

export interface IEventController {
    findAll(): string;
}