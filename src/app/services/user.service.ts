import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-utils';

/**
 * Temos aqui o Injectable como root, que é um singleton, ou seja, uma instância
 * única para toda a aplicação.
 *
 * É no 'service' que fica a lógica de negócio. Portanto em uma aplicação que acessa
 * uma API remota é o 'service' que faz o acesso e trata os erros, após isso ele
 * encaminha os resultados para o 'component' implementando assim uma espécie de
 * MVC, aonde o 'component' faz o papel de controlador que solicita aos services
 * para realizarem as atividades mais pesadas e ele fica responsável apenas por
 * controlar a VISÃO e passar os dados ou o DTO para a visão apresentar os dados
 * para o usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
  * o users é a lista de usuários que sempre estará atualizada
  */
  users!: User[];
  className: string = 'users';

  /**
  * aqui no construtor a lista de usuários é recuperada do localStorage
  */
  constructor() {
    this.users = WebStorageUtil.get(this.className);
  }

  /**
   * "FAZ A PERSISTÊNCIA DE UMA ENTIDADE"
   * ele recebe a referência de um usuários => user: User
   *
   * pega a lista de usuários que estão no localStorage
   * this.users = WebStorageUtil.get(Constants.USERNAME_KEY);
   *
   * inclui no final dessa lista => this.users.push(user); o usuário passado como
   * parâmetro
   *
   * depois seta novamente esse vetor no localStorage:
   * WebStorageUtil.set(Constants.USERNAME_KEY, this.users);
   *
   * @param user referência de um usuário
   */
   save(user: User) {
    this.users = WebStorageUtil.get(this.className);
    this.users.push(user);
    WebStorageUtil.set(this.className, this.users);
  }

  /**
   * remove o usuário antigo e salva um novo depois no vetor
   * @param user
   */
   update(user: User) {
    this.users = WebStorageUtil.get(this.className);
    this.delete(user.username);
    this.save(user);
  }

  /**
   * atualiza o vetor de usuários conforme o que está persistido no localStorage
   * this.users = WebStorageUtil.get(Constants.USERNAME_KEY);
   *
   * usa o 'filter' para trazer todos os usuários:
   * this.users.filter((u)..... menos o que está referenciado no atributo 'username'
   * então ele exclui u.username?.valueOf() != username?.valueOf(); esse elemento
   * da lista e depois salva a lista nova sem esse usuário
   *
   *
   * @param username
   * @returns
   */
   delete(username: string): boolean {
    this.users = WebStorageUtil.get(this.className);
    this.users = this.users.filter((u) => {
      return u.username?.valueOf() != username?.valueOf();
    });

    WebStorageUtil.set(this.className, this.users);
    return true;
  }

  /**
   * Esse é o metodo que verifica se um objeto existe ou não naquele vetor
   * vai comparar se o userName é igual ao username que existe já persistido no
   * localStorage
   * if (u.username?.valueOf() == value?.valueOf()) {
   *
   * @param value
   * @returns
   */
  isExist(value: string): boolean {
    this.users = WebStorageUtil.get(this.className);
    for (let u of this.users) {
      if (u.username?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  /**
   * retorna o vetor de usuários atualizado
   * @returns vetor de usuários atualizado
   */
  getUsers(): User[] {
    this.users = WebStorageUtil.get(this.className);
    return this.users;
  }

}
