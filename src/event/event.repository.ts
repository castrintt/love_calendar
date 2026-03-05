import { Injectable } from "@nestjs/common";
import { IEventRepository } from "./event.interface";

@Injectable()
export class EventRepository implements IEventRepository {

}
