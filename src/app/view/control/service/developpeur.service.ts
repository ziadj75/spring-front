import { Injectable } from '@angular/core';
import {Developpeur} from "../model/developpeur.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeveloppeurService {

  constructor(private http:HttpClient) { }
  private _Develloppeurs:Array<Developpeur>
  private _devellopeur:Developpeur
  private url=environment.baseUrl+'devellopeur'

  get Develloppeurs(): Developpeur[] {
    if(this._Develloppeurs==null)
      this._Develloppeurs=new Array<Developpeur>()
    return this._Develloppeurs;
  }

  set Develloppeurs(value: Developpeur[]) {
    this._Develloppeurs = value;
  }


  get devellopeur(): Developpeur {
    if(this._devellopeur==null)
      this._devellopeur=new Developpeur()
    return this._devellopeur;
  }

  set devellopeur(value: Developpeur) {
    this._devellopeur = value;
  }

  findAll():Observable<Array<Developpeur>>{
    return this.http.get<Array<Developpeur>>(this.url+'/')
  }

  ticketDeDEv(developpeur: string) {
    return this.http.get<Developpeur>(this.url+'/refdev/'+developpeur)
  }
}
