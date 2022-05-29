import {Role} from "./role.model";
import {Ticket} from "./ticket.model";

export class Client {
  id:number
  role=new Role()
  tickets=new Array<Ticket>()

}
