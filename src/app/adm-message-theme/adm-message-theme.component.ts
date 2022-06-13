import { Theme } from './../model/theme';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-adm-message-theme',
  templateUrl: './adm-message-theme.component.html',
  styleUrls: ['./adm-message-theme.component.css']
})
export class AdmMessageThemeComponent implements OnInit {
  themes?: Theme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.themes = this.themeService.getThemes();
  }

}

