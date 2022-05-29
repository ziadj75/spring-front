import { Injectable } from '@angular/core';
import {Ticket} from "../model/ticket.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _fill:Ticket
  private url=environment.baseUrl+'client'
  constructor(private http:HttpClient) { }

  get fill(): Ticket {
    if(this._fill==null)
      this._fill=new Ticket()
    return this._fill;
  }

  set fill(value: Ticket) {
    this._fill = value;
  }

  saveTicket() {
    return this.http.post<number>(this.url+'/',this.fill)
  }
}
