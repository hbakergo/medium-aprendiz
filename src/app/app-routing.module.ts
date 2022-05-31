import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';

import { LandPageComponent } from './land-page/land-page.component';
import { MediumComponent } from './medium/medium.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'mensagens', component: MessagesPageComponent},
  { path: 'medium', component: MediumComponent },
  { path: 'contato', component: ContactComponent},
  { path: 'mensagens/:authorship', component: MessagesPageComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
