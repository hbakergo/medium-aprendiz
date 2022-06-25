import { MessageObservableService } from './../services/message-observable.service';
import { Theme } from './../model/theme';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Shared } from '../util/shared';
import { ThemePromiseService } from '../services/theme-promise.service';

@Component({
  selector: 'app-adm-message-theme',
  templateUrl: './adm-message-theme.component.html',
  styleUrls: ['./adm-message-theme.component.css']
})
export class AdmMessageThemeComponent implements OnInit {
  themes?: Theme[];
  theme?: Theme;

  constructor(
    private themeService: ThemeService,
    private themePromiseService: ThemePromiseService,
    private messageObservableService: MessageObservableService,
  ) { }

  async ngOnInit(): Promise<void> {
    Shared.initializeWebStorage();
    /**
     * desabilitado para atender a entrega 10
     */
    //this.themes = this.themeService.getThemes();

    this.themePromiseService.getThemes()
      .then(value => {
        this.themes = value;
        this.themes?.sort((a, b) => (a.name < b.name) ? -1 : 1);
      });

  }

  /**
   * método para apgar o tema
   * @param username
   * @returns
   */
   onDelete(theme: Theme){

     let confirmation = window.confirm(
       'Você tem certeza que deseja remover o tema? =>' + theme.name
     );

    /**
     * caso o usuário não concorda com a deleção ele retorna e não segue na
     * execução deste método onDelete
     */
    if (!confirmation) {
      return;
    }

    this.messageObservableService.getByThemeId(theme.id)
    .subscribe(
      (data) => {
        console.log(data);
        if(data.length>0){
          alert('Não é possível deletar, tema está sendo usado!');
        } else{

          this.themePromiseService.delete(theme);

          this.themePromiseService.getThemes()
            .then(value => { this.themes = value;});
        }
      }
    )

  }

}
