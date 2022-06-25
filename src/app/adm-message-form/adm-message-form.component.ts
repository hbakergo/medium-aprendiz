import { ThemePromiseService } from './../services/theme-promise.service';
import { MessageObservableService } from './../services/message-observable.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { Shared } from '../util/shared';
import { Theme } from '../model/theme';
import { ThemeObservableService } from '../services/theme-observable.service';

@Component({
  selector: 'app-adm-message-form',
  templateUrl: './adm-message-form.component.html',
  styleUrls: ['./adm-message-form.component.css']
})
export class AdmMessageFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  message!: Message;
  themes!: Theme[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
  isSuccess!: boolean; //se a mensagem teve sucesso ou erro
  messageUser!: string; // própria mensagem a ser apresentada

  constructor(
    private router: Router,
    private messageObservableService: MessageObservableService,
    private themeObservableService: ThemeObservableService,
  ) { }

  ngOnInit(): void {
    this.message = new Message(new Date(),'','');
    Shared.initializeWebStorage();

    this.themeObservableService.getAll()
      .subscribe(
        (data) => {
          this.themes = data;
          this.themes?.sort((a, b) => (a.name < b.name) ? -1 : 1);
        },
        (error) => {
          alert('Erro inesperado!');
        }
      )
  }

  onSubmit(){
    this.isSubmitted = true;
    this.messageObservableService.save(this.message).subscribe(
      savedEntity => {
        console.log(savedEntity);
        this.router.navigate(['a/mensagens']);
      }
    );
  }

}
