import { Component, Input, OnInit } from '@angular/core';

import { Message } from './../model/message';
import { messages } from '../util/messages';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() show!: boolean;
  messages = messages;
  messagesResult!: Message[];
  sortBy = 'ZA';
  showFilter = false;

  constructor() { }

  ngOnInit(): void {
    this.onSortMessages();
  }

  /**
   * Ordena as mensagens exibidas de acordo com o atributo sortBy
   * do componente
   */
   onSortMessages(){
    if (this.sortBy === 'AZ'){
      this.messages.sort((a, b) => (a.date < b.date) ? -1 : 1);
    } else if (this.sortBy === 'ZA') {
      this.messages.sort((a, b) => (a.date < b.date) ? 1 : -1);
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
