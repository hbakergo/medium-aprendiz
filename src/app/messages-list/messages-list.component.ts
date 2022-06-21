import { Component, Input, OnInit } from '@angular/core';

import { Message } from './../model/message';
import { messages } from '../util/messages';
import { MessageObservableService } from '../services/message-observable.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() show!: boolean;
  @Input() authorShip?: string;
  @Input() content?: string;
  @Input() search?: boolean;

  //messages = messages;
  messages?: Message[];

  messagesResult!: Message[];
  sortBy = 'ZA';
  showFilter = false;

  constructor(
    private messageObservableService: MessageObservableService
  ) { }

  ngOnInit(): void {
    this.onSortMessages();

    //se não informou conteúdo nenhum ele coloca vazio na string
    if(this.content === null || this.content ===undefined ){
      this.content = '';
    }

    //se não informou conteúdo nenhum ele coloca vazio na string
    if(this.authorShip === null || this.authorShip ===undefined ){
      this.authorShip = '';
    }

    //se não foi feito busca, ou seja, usuário clicou no 'Mensagens' ele mostra os 3 últimos
    if(!this.search){
      this.messageObservableService.getLast3()
        .subscribe(
          (data) => {
            this.messages = data;
          },
          (error) => {
            alert('ERRO INESPERADO!');
          }
        );
    } else //se foi feito busca e foi informado algo a buscar
      if(this.search && (this.authorShip || this.content)){
      this.messageObservableService.getBy(this.content, this.authorShip)
        .subscribe(
          (data) => {
            this.messages = data;
          },
          (error) => {
            alert('ERRO INESPERADO!');
          }
        );
    }else{ //se não informou nada e clicou no buscar ele traz as 3 últimas mensagens
      alert('Para realizar uma busca, informar o autor e/ou conteúdo da mensagem que deseja! Abaixo serão exibidas as 3 últimas mensagens do acervo!');
      this.messageObservableService.getLast3()
        .subscribe(
          (data) => {
            this.messages = data;
          },
          (error) => {
            alert('ERRO INESPERADO!');
          }
        );
    }
  }

  /**
   * Ordena as mensagens exibidas de acordo com o atributo sortBy
   * do componente
   */
   onSortMessages(){
    if (this.sortBy === 'AZ'){
      this.messages?.sort((a, b) => (a.date < b.date) ? -1 : 1);
    } else if (this.sortBy === 'ZA') {
      this.messages?.sort((a, b) => (a.date < b.date) ? 1 : -1);
    }
  }

  /**
   * Recebe a nova ordenação das mensagens exibidas:
   *  -> AZ é relativo a ordem crescente (mais antiga para mais atual)
   *  -> ZA é relativo a ordem decrescente(mais atual para mais antiga)
   * A ordenação é feita pela data dentro do onSortMessages()
   * @param newSort parâmetro vindo do componente filho (boolean) que
   *                informa qual ordenação aplicar
   */
  onSwitchSort(newSort: boolean) {
    if (newSort){
      this.sortBy='ZA';
    } else this.sortBy='AZ';

    this.onSortMessages();
  }
}
