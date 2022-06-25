import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../model/message';
import { Theme } from '../model/theme';
import { MessageObservableService } from '../services/message-observable.service';
import { ThemeObservableService } from '../services/theme-observable.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-adm-message-edit',
  templateUrl: './adm-message-edit.component.html',
  styleUrls: ['./adm-message-edit.component.css']
})
export class AdmMessageEditComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  message!: Message;

  messageId!: number;

  themes!: Theme[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
  isSuccess!: boolean; //se a mensagem teve sucesso ou erro
  messageUser!: string; // própria mensagem a ser apresentada

  constructor(
    private router: Router,
    private messageObservableService: MessageObservableService,
    private themeObservableService: ThemeObservableService,
    private route: ActivatedRoute,
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

      //pegar o id da mensagem a ser editada
      this.route.queryParams.subscribe(params => {
        this.messageId = params['id'];

      });

      //pegar a mensagem a ser editada
      this.messageObservableService.getById(this.messageId)
        .subscribe(
          (data) => {
            this.message = data;
          },
          (error) => {
            alert('ERRO INESPERADO!');
          }
      );


  }

  onSubmit(){

    this.isSubmitted = true;
    this.messageObservableService.patch(this.message).subscribe(
      (data) => {
        console.log(data);

        this.isShowMessage = true;
        this.isSuccess = true;
        this.messageUser = 'Cadastro realizado com sucesso!';
        this.form.reset(); //limpa o formulário
        this.message = new Message(new Date(),'',''); //instancia novo objeto preparando formulário
        this.router.navigate(['a/mensagens']);
      }

    );

  }

}
