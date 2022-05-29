import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Role} from "../model/role.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  private url = environment.baseUrl + 'role/';
  private _selected:Role;


  get selected(): Role {
    if(this._selected==null){
      this._selected=new Role();
    }
    return this._selected;
  }

  set selected(value: Role) {
    this._selected = value;
  }

  signin():Observable<Role>{
    return this.http.get<Role>(this.url+'username/'+this.selected.login+'/password/'+this.selected.password);
  }
}
