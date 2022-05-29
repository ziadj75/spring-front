import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AdminCreateComponent } from './view/admin/admin-create/admin-create.component';
import { AdminComponent } from './view/admin/admin.component';
import { ClientComponent } from './view/client/client.component';
import { DeveloppeurComponent } from './view/developpeur/developpeur.component';
import {AdminListComponent} from "./view/admin/admin-list/admin-list.component";
import {FormsModule} from "@angular/forms";
import {AngularPaginatorModule} from "angular-paginator";
import { ClientCreateComponent } from './view/client/client-create/client-create.component';
import { ClientListComponent } from './view/client/client-list/client-list.component';
import { DeveloppeurCreateComponent } from './view/developpeur/developpeur-create/developpeur-create.component';
import { DeveloppeurListComponent } from './view/developpeur/developpeur-list/developpeur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminListComponent,
    AdminCreateComponent,
    AdminComponent,
    ClientComponent,
    DeveloppeurComponent,
    ClientCreateComponent,
    ClientListComponent,
    DeveloppeurCreateComponent,
    DeveloppeurListComponent
  ],
  imports: [
    AngularPaginatorModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
