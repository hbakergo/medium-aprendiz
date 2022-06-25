import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmLandPageComponent } from './adm-land-page/adm-land-page.component';
import { AdmMessageEditComponent } from './adm-message-edit/adm-message-edit.component';
import { AdmMessageFormComponent } from './adm-message-form/adm-message-form.component';
import { AdmMessageThemeEditComponent } from './adm-message-theme-edit/adm-message-theme-edit.component';
import { AdmMessageThemeFormComponent } from './adm-message-theme-form/adm-message-theme-form.component';
import { AdmMessageThemeComponent } from './adm-message-theme/adm-message-theme.component';
import { AdmMessageComponent } from './adm-message/adm-message.component';
import { AdmUserComponent } from './adm-user/adm-user.component';

import { ContactComponent } from './contact/contact.component';

import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MediumComponent } from './medium/medium.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './util/authentication.guard';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'a/temas',
    component: AdmMessageThemeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/novo-tema',
    component: AdmMessageThemeFormComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/editar-tema',
    component: AdmMessageThemeEditComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/usuarios',
    component: AdmUserComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/mensagens',
    component: AdmMessageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/nova-mensagem',
    component: AdmMessageFormComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a/editar-mensagem',
    component: AdmMessageEditComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'a',
    component: AdmLandPageComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: 'mensagens', component: MessagesPageComponent},
  { path: 'medium', component: MediumComponent },
  { path: 'contato', component: ContactComponent},
  { path: 'mensagens/:authorship', component: MessagesPageComponent},
  { path: 'mensagens/:content/:authorship/:initialdate/:finaldate', component: MessagesPageComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule { }
