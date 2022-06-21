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
    alert('[implementar futuramente] -> Enviar mensagem com sucesso!');
  }

}
