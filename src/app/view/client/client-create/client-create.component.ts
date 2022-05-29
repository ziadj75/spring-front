import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../control/model/ticket.model";
import {ClientService} from "../../control/service/client.service";
import {TicketService} from "../../control/service/ticket.service";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private service:ClientService,private ticketservice:TicketService) { }

  ngOnInit(): void {
  }
  get fill(): Ticket {
    return this.service.fill;
  }

  set fill(value: Ticket) {
    this.service.fill = value;
  }

  send() {
    console.log(this.fill)
    this.service.saveTicket().subscribe(data=>{
      if(data){
        console.log("succes")
        this.ticketservice.findByRoleRef('client').subscribe(data=>
          {
            if(data){
              console.log(data)
              this.fill=null
              this.ticketservice.tickets=data
            }
          }
        )
      }
    })
  }
}
