import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../control/service/ticket.service";
import {Ticket} from "../../control/model/ticket.model";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.ticketService.findByRoleRef('client').subscribe(data=>{
        if(data){
          console.log(data)
          this.tickets=data
        }
      }
    )
  }
  get tickets(): Array<Ticket> {
    return this.ticketService.tickets;
  }

  set tickets(value: Array<Ticket>) {
    this.ticketService.tickets = value;
  }
}
