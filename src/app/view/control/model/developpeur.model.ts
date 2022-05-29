import {Role} from "./role.model";
import {Ticket} from "./ticket.model";

export class Developpeur {
  int:number
  ref:string
  role=new Role()
  ticket=new Array<Ticket>()

}
