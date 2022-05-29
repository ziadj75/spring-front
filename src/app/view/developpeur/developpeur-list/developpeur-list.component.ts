import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../control/service/ticket.service";
import {Ticket} from "../../control/model/ticket.model";
import {DeveloppeurService} from "../../control/service/developpeur.service";

@Component({
  selector: 'app-developpeur-list',
  templateUrl: './developpeur-list.component.html',
  styleUrls: ['./developpeur-list.component.css']
})
export class DeveloppeurListComponent implements OnInit {

  constructor(private ticketService:TicketService,private service:DeveloppeurService) {
  }

  get tickets(): Array<Ticket> {
    return this.ticketService.tickets;
  }

  set tickets(value: Array<Ticket>) {
    this.ticketService.tickets = value;
  }

  ngOnInit(): void {
    this.service.ticketDeDEv('dev-1').subscribe(data=>{
        if(data){
          console.log(data)
          this.tickets=data.ticket
          console.log(data.ticket)
        }
      }
    )
  }
  get selecteds(): Ticket {
    return this.ticketService.selected;
  }

  set selecteds(value: Ticket) {
    this.ticketService.selected = value;
  }
  selected(ticket: Ticket) {
    this.selecteds.ref=ticket.ref
    this.ticketService.findByRef().subscribe(data=>
      {
        if(data){
          this.selecteds=data
        }
      }
    )

  }
}
