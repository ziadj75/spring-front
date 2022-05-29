import { Component, OnInit } from '@angular/core';
import {TicketService} from "../../control/service/ticket.service";
import {Ticket} from "../../control/model/ticket.model";
import {DeveloppeurService} from "../../control/service/developpeur.service";
import {Developpeur} from "../../control/model/developpeur.model";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private service:TicketService,private servicedev:DeveloppeurService) { }

  ngOnInit(): void {
    this.servicedev.findAll().subscribe(
      data=>{
        if(data){
          this.Develloppeurs=data
        }

      }
    )
  }
  get selected(): Ticket {
    return this.service.selected;
  }

  set selected(value: Ticket) {
    this.service.selected = value;
  }

  get Develloppeurs(): Developpeur[] {
    return this.servicedev.Develloppeurs;
  }

  set Develloppeurs(value: Developpeur[]) {
    this.servicedev.Develloppeurs = value;
  }
  get Develloppeur(): Developpeur {
    return this.servicedev.devellopeur;
  }

  set Develloppeur(value: Developpeur) {
    this.servicedev.devellopeur = value;
  }
  get tickets(): Array<Ticket> {

    return this.service.tickets;
  }

  set tickets(value: Array<Ticket>) {
    this.service.tickets = value;
  }

  isSelected($event: any) {
    this.Develloppeur.ref = $event.target.value;
  }

  send() {
    this.service.affecterTicket(this.Develloppeur.ref).subscribe(data=>{
      if(data){
        console.log(data)
        this.tickets.slice(this.selected.id)
      }
    })
  }
}
