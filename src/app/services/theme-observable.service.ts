import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Theme } from '../model/theme';
import { ErrorUtil } from '../util/error-util';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root'
})
export class ThemeObservableService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  /**
   * Lista os temas
   * @returns
   */
   getAll(): Observable<Theme[]>{

    return this.httpClient
      .get<Theme[]>(RoutesAPI.THEMES)
      .pipe(catchError(ErrorUtil.handleError));
  }

  //retorna o tema
  getById(id: number): Observable<Theme> {
    return this.httpClient.get<Theme>(`${RoutesAPI.THEMES}/${id}`);
  }

  patch(theme: Theme): Observable<Theme> {
    return this.httpClient.patch<Theme>(
      `${RoutesAPI.THEMES}/${theme.id}`,
      theme
    );
  }
}
