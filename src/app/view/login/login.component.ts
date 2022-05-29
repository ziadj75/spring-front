import { Component, OnInit } from '@angular/core';
import {RoleService} from "../control/service/role.service";
import {Router} from "@angular/router";
import {Role} from "../control/model/role.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private roleservice:RoleService,private router:Router) { }

  ngOnInit(): void {
  }
  get selected(): Role {
    return this.roleservice.selected;
  }

  set selected(value: Role) {
    this.roleservice.selected = value;
  }
  signIn() {
    this.roleservice.signin().subscribe(data=>{
        if(data){
          switch (data.role)
          {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'client':
              this.router.navigate(['/client']);
              break;
            case 'developpeur':
              this.router.navigate(['/developpeur']);
              break;
          }
      }
    }

    )
  }
}
