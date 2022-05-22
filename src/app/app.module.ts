import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoPubComponent } from './bem-vindo-pub/bem-vindo-pub.component';
import { BemVindoAdmComponent } from './bem-vindo-adm/bem-vindo-adm.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MessageSearchComponent } from './message-search/message-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoPubComponent,
    BemVindoAdmComponent,
    MenuComponent,
    FooterComponent,
    MessageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
