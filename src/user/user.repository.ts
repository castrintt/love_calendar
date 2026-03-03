import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.interface";

@Injectable()
export class UserRepository implements IUserRepository {

}
