import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Theme } from '../model/theme';
import { ThemePromiseService } from '../services/theme-promise.service';
import { ThemeService } from '../services/theme.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-adm-message-theme-form',
  templateUrl: './adm-message-theme-form.component.html',
  styleUrls: ['./adm-message-theme-form.component.css']
})
export class AdmMessageThemeFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  theme!: Theme;

  isSubmitted!: boolean;
  isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
  isSuccess!: boolean; //se a mensagem teve sucesso ou erro
  message!: string; // própria mensagem a ser apresentada

  /**
   * Aqui no construtor é feita a injeção de dependência do service ThemeService
   */
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private themePromiseService: ThemePromiseService
  ) {

  }

  /**
   * temos a inicialização do localStorage => Shared.initializeWebStorage(); caso ele
   * não esteja inicializado
   *
   * temos também a instanciação de um objeto vazio => this.user = new User('', '');
   * que faz o mapeamento com o formulário
   *
   */
  ngOnInit(): void {
    this.theme = new Theme('');
    Shared.initializeWebStorage();

  }

  onSubmit(){
    this.isSubmitted = true;
    if (!this.themeService.isExist(this.theme.name)){ //verifica se existe ou não
      this.themePromiseService.save(this.theme);
    } else {
      //this.themeService.update(this.theme);
      alert('Editar com promise');
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    /**
     * para usar aqui o reset(), foi necessário usar o viewChild acima pegando a
     * referencia do formulário e guardando no atributo form dessa classe
     */
    this.form.reset(); //limpa o formulário
    this.theme = new Theme(''); //instancia novo objeto preparando formulário
    //this.themes = this.themeService.getUsers(); //atualiza vetor de usuários
    this.router.navigate(['a/temas']);
  }

}
