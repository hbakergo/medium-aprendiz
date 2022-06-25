import { ThemeObservableService } from './../services/theme-observable.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../model/theme';
import { ThemePromiseService } from '../services/theme-promise.service';
import { ThemeService } from '../services/theme.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-adm-message-theme-edit',
  templateUrl: './adm-message-theme-edit.component.html',
  styleUrls: ['./adm-message-theme-edit.component.css']
})
export class AdmMessageThemeEditComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  theme!: Theme;

  themeId!: number;

  isSubmitted!: boolean;
  isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
  isSuccess!: boolean; //se a mensagem teve sucesso ou erro
  message!: string; // própria mensagem a ser apresentada

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private themePromiseService: ThemePromiseService,
    private themeObservableService: ThemeObservableService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.theme = new Theme('');

    this.route.queryParams.subscribe(params => {
      this.themeId = params['id'];

    })

    this.themeObservableService.getById(this.themeId)
        .subscribe(
          (data) => {
            this.theme = data;
          },
          (error) => {
            alert('ERRO INESPERADO!');
          }
        );

  }

  onSubmit(){
    this.isSubmitted = true;
    this.themePromiseService.patch(this.theme);
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset(); //limpa o formulário
    this.theme = new Theme(''); //instancia novo objeto preparando formulário
    this.router.navigate(['a/temas']);
  }

}
