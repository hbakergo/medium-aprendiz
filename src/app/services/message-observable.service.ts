import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class MessageObservableService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  /**
   * Lista todas as mensagens psicografadas
   * @returns
   */
   getAll(): Observable<Message[]>{

    return this.httpClient
      .get<Message[]>(RoutesAPI.MESSAGES)
      .pipe(catchError(ErrorUtil.handleError));
  }

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

  //buscar pelo id do tema
  getByThemeId(id: number): Observable<Message[]> {

     const query: HttpParams = new HttpParams().set('themeId', id);

     const options = id ? { params: query } : {};

    return this.httpClient.get<Message[]>(`${RoutesAPI.MESSAGES}/${id}/messages`, options);
  }

  //buscar pelo id da mensagem
  getById(id: number): Observable<Message> {
    return this.httpClient.get<Message>(`${RoutesAPI.MESSAGES}/${id}`);
  }

  /**
   * Deleta mensagem
   * @returns
   */
   delete(message: Message): Observable<Message[]>{

    return this.httpClient
      .delete<Message[]>(`${RoutesAPI.MESSAGES}/${message.id}`)
      .pipe(catchError(ErrorUtil.handleError));
  }

  save(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(
      RoutesAPI.MESSAGES,
      message
    );
  }

  patch(message: Message): Observable<Message> {
    return this.httpClient.patch<Message>(
      `${RoutesAPI.MESSAGES}/${message.id}`,
      message
    );
  }
}
