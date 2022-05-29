import {Role} from "./role.model";

export class Ticket {
    id:number;
    etatTache:string;
    description:string;
    environement:string;
    urgence:string;
    ref:string;
    role=new Role();
}
