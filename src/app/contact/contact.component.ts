import { Component, OnInit } from '@angular/core';

import { Validation } from '../util/validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactMessage = '';
  contactInvalid = false;
  name = '';
  email = '';
  message = '';
  errors : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contactMessage = '';
  }

  onSubmit(){
    if (!this.name){
      this.errors.push("\nFaltou informar o nome!");
    }
    if (!this.email){
      this.errors.push("\nFaltou informar o e-mail!");
    } else if (!Validation.validateEmail(this.email)) {
      this.errors.push("\nE-mail inválido!");
      this.email = '';
    }
    if (!this.message){
      this.errors.push("\nFaltou informar a mensagem!");
    }
    if(this.errors.length>0){
      this.contactInvalid = true;
      this.contactMessage = `Erro ao enviar mensagem:
                            ${this.errors}`;
    } else {
      this.contactMessage = "Mensagem enviada, agradecemos o contato. Logo responderemos!";
    }
  }

}
