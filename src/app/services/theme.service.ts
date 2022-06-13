import { Theme } from './../model/theme';
import { WebStorageUtil } from './../util/web-storage-utils';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes!: Theme[];
  className: string = 'themes';

  constructor() {
    this.themes = WebStorageUtil.get(this.className);
  }

  //salvar tema no array que está no webstorage
  /**
   * "FAZ A PERSISTÊNCIA DE UMA ENTIDADE"
   * ele recebe a referência de um tema => save(theme: Theme)
   *
   * pega a lista de TEMAS que estão no localStorage
   * this.themes = WebStorageUtil.get(this.className);
   *
   * inclui no final dessa lista => this.themes.push(theme); o TEMA
   * passado como parâmetro
   *
   * depois seta novamente esse vetor no localStorage:
   * WebStorageUtil.set(this.className, this.themes);
   *
   * @param theme
   */
  save(theme: Theme) {
    this.themes = WebStorageUtil.get(this.className);
    this.themes.push(theme);
    WebStorageUtil.set(this.className, this.themes);

  }

  //atualiza um tema no array que está no webstorage
  /**
   * remove o antigo e salva um novo depois no vetor de temas
   * @param theme
   */
  update(theme: Theme) {
    this.themes = WebStorageUtil.get(this.className);
    this.delete(theme.name);
    this.save(theme);
  }

  //deleta um tema do array que está no webstorage
  /**
   * atualiza o vetor de TEMAS conforme o que está persistido no localStorage
   * this.themes = WebStorageUtil.get(this.className);
   *
   * usa o 'filter' para trazer todos os temas:
   * this.themes.filter((t)..... menos o que está referenciado no atributo 'themaname'
   * então ele exclui t.themename?.valueOf() != themename?.valueOf(); esse elemento
   * da lista e depois salva a lista nova sem esse tema
   * @param themaname
   * @returns
   */
  delete(themename: string): boolean {
    this.themes = WebStorageUtil.get(this.className);
    this.themes = this.themes.filter((t) => {
      return t.name?.valueOf() != themename?.valueOf();
    });

    WebStorageUtil.set(this.className, this.themes);
    return true;
  }

  /**
   * Esse é o metodo que verifica se um objeto existe ou não naquele vetor
   * vai comparar se o nome do tema(value) é igual ao (t.name) que existe já
   * persistido no localStorage
   * if (t.name?.valueOf() == value?.valueOf()) {
   *
   * @param value
   * @returns
   */
  isExist(value: string): boolean {
    this.themes = WebStorageUtil.get(this.className);
    for (let t of this.themes) {
      if (t.name?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  /**
   * retorna o vetor de temas atualizado
   * @returns vetor de temas atualizado
   */
   getThemes(): Theme[] {
    this.themes = WebStorageUtil.get(this.className);
    return this.themes;
  }
}
