import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./view/admin/admin.component";
import {ClientComponent} from "./view/client/client.component";
import {DeveloppeurComponent} from "./view/developpeur/developpeur.component";
import {LoginComponent} from "./view/login/login.component";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path:'',component:LoginComponent
      },
      {
        path:'admin',component:AdminComponent
      },
      {
        path:'client',component:ClientComponent
      },
      {
        path:'developpeur',component:DeveloppeurComponent
      },
    ]),
    CommonModule
  ]
})
export class AppRoutingModule { }
