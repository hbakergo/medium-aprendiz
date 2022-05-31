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
import { LandPageComponent } from './land-page/land-page.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageSortComponent } from './message-sort/message-sort.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MediumComponent } from './medium/medium.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoPubComponent,
    BemVindoAdmComponent,
    MenuComponent,
    FooterComponent,
    MessageSearchComponent,
    LandPageComponent,
    MessagesListComponent,
    MessageSortComponent,
    ContactComponent,
    PageNotFoundComponent,
    MediumComponent,
    MessagesPageComponent
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
