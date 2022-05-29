import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../control/service/ticket.service";
import {Ticket} from "../../control/model/ticket.model";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {



  constructor(private ticketService:TicketService) {
  }

  get tickets(): Array<Ticket> {

    return this.ticketService.tickets;
  }

  set tickets(value: Array<Ticket>) {
    this.ticketService.tickets = value;
  }

  ngOnInit(): void {
    this.ticketService.findNonAttribue().subscribe(data=>{
      if(data){
        console.log(data)
        this.tickets=data
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
