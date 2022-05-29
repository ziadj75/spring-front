import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../control/service/ticket.service";
import {Ticket} from "../../control/model/ticket.model";

@Component({
  selector: 'app-developpeur-create',
  templateUrl: './developpeur-create.component.html',
  styleUrls: ['./developpeur-create.component.css']
})
export class DeveloppeurCreateComponent implements OnInit {

  constructor(private service:TicketService) { }

  ngOnInit(): void {
  }
  get selected(): Ticket {
    return this.service.selected;
  }

  set selected(value: Ticket) {
    this.service.selected = value;
  }
  isSelected($event: any) {
    this.selected.etatTache = $event.target.value;
  }
  send() {
    this.service.update().subscribe(data=>{
      if(data){
        console.log(data)
      }
    })
  }
}
