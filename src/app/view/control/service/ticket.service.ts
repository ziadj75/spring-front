import { Injectable } from '@angular/core';
import {Ticket} from "../model/ticket.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {DeveloppeurService} from "./developpeur.service";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  private _selected:Ticket
  private _tickets:Array<Ticket>
  private _fill:Ticket
  private url=environment.baseUrl+'ticket';

  get selected(): Ticket {
    if(this._selected==null)
      this._selected=new Ticket()
    return this._selected;
  }

  set selected(value: Ticket) {
    this._selected = value;
  }


  get tickets(): Array<Ticket> {
    if(this._tickets==null)
      this._tickets=new Array<Ticket>()
    return this._tickets;
  }

  set tickets(value: Array<Ticket>) {
    this._tickets = value;
  }


  get fill(): Ticket {
    if(this._fill==null)
      this._fill=new Ticket()
    return this._fill;
  }

  set fill(value: Ticket) {
    this._fill = value;
  }

  findNonAttribue():Observable<Array<Ticket>>{
    return this.http.get<Array<Ticket>>(this.url+'/nonattribuee/')
  }

  affecterTicket(ref: string):Observable<number>{
    return this.http.post<number>(environment.baseUrl+'admin'+'/refDev/'+ref,this._selected)
  }

  findByRef() :Observable<Ticket>{
    return this.http.get<Ticket>(this.url+'/ref/'+this.selected.ref)
  }

  findByRoleRef(role:string) {
    return this.http.get<Array<Ticket>>(this.url+'/refrole/'+role)
  }

  update() {
    return this.http.put<number>(this.url+'/',this.selected)
  }
}
