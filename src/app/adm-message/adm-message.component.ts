import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../model/message';
import { MessageObservableService } from '../services/message-observable.service';

@Component({
  selector: 'app-adm-message',
  templateUrl: './adm-message.component.html',
  styleUrls: ['./adm-message.component.css']
})
export class AdmMessageComponent implements OnInit {

  messages?: Message[];

  messagesResult!: Message[];
  sortBy = 'ZA';
  showFilter = false;

  authorShip?: string;
  content?: string;
  search: boolean  = false;

  constructor(
    private messageObservableService: MessageObservableService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.authorShip = params['authorShip'];
      this.content = params['content'];
      this.search = params['search'];

      //se não informou conteúdo nenhum ele coloca vazio na string
      if(this.content === null || this.content ===undefined ){
        this.content = '';
      }

      //se não informou conteúdo nenhum ele coloca vazio na string
      if(this.authorShip === null || this.authorShip ===undefined ){
        this.authorShip = '';
      }

      //se não foi feito busca, ou seja, usuário clicou no 'Mensagens' ele mostra todos
      if(!this.search){
        this.messageObservableService.getAll()
        .subscribe(
          (data) => {
            this.messages = data;
            this.search = false;
            this.onSortMessages();
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
              this.search = false;
              this.onSortMessages();
            },
            (error) => {
              alert('ERRO INESPERADO!');
            }
          );
      } else{
        this.search = false;
        this.router.navigate(['a/mensagens']);
      }

    })


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

  onDelete(message: Message){

    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a mensagem =>' + message.message
    );

    /**
      * caso o usuário não concorda com a deleção ele retorna e não segue na
      * execução deste método onDelete
      */
    if (!confirmation) {
      return;
    }

      this.messageObservableService.delete(message)
      .subscribe(
        (data) => {
          alert(`A mensagem <${data[0].message}> deletada com sucesso`);
        },
        (error) => {
          alert('Erro ao deletar!');
        }
      );
      window.location.reload();

  }
}
