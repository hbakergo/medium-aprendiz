import { User } from "../model/user";

/**
 * classe estática que tem alguns métodos de get e set
 * que existe basicamente para evitar o uso do JSON.parse e o JSON.stringify
 * de forma redundante no código, então essas chamadas são encapsuladas dentro
 * desses métodos da classe webstorageUtil
 */

export class WebStorageUtil {

  //busca a classe, onde key é a classe
  static get(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getArray(key: string): any[] {
    if(localStorage.getItem(key) == undefined){
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setArray(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  //salva item no array da classe
  static saveItemArray(keyCollection: string, value: any){
    let collection = this.getArray(keyCollection);
    collection.push(value);
    this.setArray(keyCollection, collection);
  }

  static sequenceId(key: string) {
    return this.getArray(key).length;
  }


}
