import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmMessageThemeFormComponent } from './adm-message-theme-form/adm-message-theme-form.component';
import { AdmMessageThemeComponent } from './adm-message-theme/adm-message-theme.component';
import { AdmUserComponent } from './adm-user/adm-user.component';

import { ContactComponent } from './contact/contact.component';

import { LandPageComponent } from './land-page/land-page.component';
import { MediumComponent } from './medium/medium.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'a/temas', component: AdmMessageThemeComponent }, //adicionar proteção
  { path: 'a/novo-tema', component: AdmMessageThemeFormComponent }, //adicionar proteção
  { path: 'a/usuarios', component: AdmUserComponent }, //adicionar proteção
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
