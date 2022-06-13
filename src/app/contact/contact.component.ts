import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Validation } from '../util/validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  contactMessage = '';
  contactInvalid = false;

  namets!: string;
  emailts!: string;
  usermessagets!: string;
  isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
  isSuccess!: boolean; //se a mensagem teve sucesso ou erro
  message!: string; // própria mensagem a ser apresentada


  errors : string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.contactMessage = '';
    this.namets = '';
    this.emailts = '';
    this.usermessagets = '';
  }


  onSubmit(){
    alert('[implementar] -> Enviar mensagem com sucesso!');
    // if (!this.name){
    //   this.errors.push("\nFaltou informar o nome!");
    // }
    // if (!this.email){
    //   this.errors.push("\nFaltou informar o e-mail!");
    // } else if (!Validation.validateEmail(this.email)) {
    //   this.errors.push("\nE-mail inválido!");
    //   this.email = '';
    // }
    // if (!this.message){
    //   this.errors.push("\nFaltou informar a mensagem!");
    // }
    // if(this.errors.length>0){
    //   this.contactInvalid = true;
    //   this.contactMessage = `Erro ao enviar mensagem:
    //                         ${this.errors}`;
    // } else {
    //   this.contactMessage = "Mensagem enviada, agradecemos o contato. Logo responderemos!";
    // }
  }

}
