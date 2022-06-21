import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root'
})
export class MessageObservableService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  /**
   * Lista as 3 últimas mensagens psicografadas -> "mais recentes"
   * @returns
   */
  getLast3(): Observable<Message[]>{
    const query: HttpParams = new HttpParams().set('_limit', 3);
    const options = { params: query };

    return this.httpClient
      .get<Message[]>(`${RoutesAPI.MESSAGES}?_sort=date&_order=DESC&`, options);
  }

  /**
   * Buscar pelo authorship => autor, usei _like para ignorar maiusculas e minusculas
   * Buscar tbm pelo content=> busca por alguma palavra ou sentença que tenha na mensagem
   * @param authorShip
   * @returns
   */
  getBy(content: string, authorShip: string): Observable<Message[]> {

    const query: HttpParams = new HttpParams().set('authorship_like', authorShip)
                                .append('message_like', content);
    const options = authorShip + content ? { params: query } : {};

    return this.httpClient.get<Message[]>(`${RoutesAPI.MESSAGES}`, options);
  }
}
