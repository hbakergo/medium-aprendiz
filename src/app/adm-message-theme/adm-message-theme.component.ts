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

  constructor(
    private themeService: ThemeService,
    private themePromiseService: ThemePromiseService
  ) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    /**
     * desabilitado para atender a entrega 10
     */
    //this.themes = this.themeService.getThemes();

    this.themePromiseService.getThemes()
      .then(value => { this.themes = value;});
  }

}

