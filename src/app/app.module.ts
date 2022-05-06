import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoPubComponent } from './bem-vindo-pub/bem-vindo-pub.component';
import { BemVindoAdmComponent } from './bem-vindo-adm/bem-vindo-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoPubComponent,
    BemVindoAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
