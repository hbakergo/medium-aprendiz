import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Theme } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemePromiseService {
  URL = 'http://localhost:3000/themes';
  URL_PT = 'http://localhost:3000/temas';

  themes!: Theme[] | undefined;

  //informa que o dado a ser enviado é um json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {
    this.getThemes()
      .then(value => { this.themes = value;});
   }

  getThemes(): Promise<Theme[] | undefined> {
    return this.httpClient.get<Theme[]>(`${this.URL_PT}`).toPromise();
  }

  save(theme: Theme): Promise<any> {
    return this.httpClient
      .post<Theme>(
        this.URL,
        JSON.stringify(theme),
        this.httpOptions
      )
      .toPromise();
  }

  patch(theme: Theme): Promise<any> {
    return this.httpClient
      .patch<Theme>(
        `${this.URL}/${theme.id}`,
        JSON.stringify(theme),
        this.httpOptions
      )
      .toPromise();
  }

  update(theme: Theme): Promise<any> {
    return this.httpClient
      .put<Theme>(
        `${this.URL}/${theme.id}`,
        JSON.stringify(theme),
        this.httpOptions
      )
      .toPromise();
  }

  delete(theme:Theme): Promise<any> {
    return this.httpClient.delete(this.URL+'/'+theme.id).toPromise();
  }

}
