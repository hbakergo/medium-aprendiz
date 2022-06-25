import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-adm-user',
  templateUrl: './adm-user.component.html',
  styleUrls: ['./adm-user.component.css']
})
export class AdmUserComponent implements OnInit {

  /**
   * foi usado um viewChild para pegar a referência ao formulário, sendo que essa
   * referência foi usada apenas para resetar o formulátio no método onSubmit()
   */
   @ViewChild('form') form!: NgForm;

   /**
    * abaixo temos a referência do 'user' que é nosso model e é esse user que está
    * mapeado com os campos do 'input' via two-way data binding
    * Declaração: abaixo na declaração dele usamos o '!' para dizer que garantimos
    * que ele será inicializado no ngOnInit() e não no construtor
    */
   user!: User;
   users?: User[];

   userRepassword: string = '';

   isSubmitted!: boolean;
   isShowMessage: boolean = false; // se a mensagem vai ser apresentada ou não
   isSuccess!: boolean; //se a mensagem teve sucesso ou erro
   message!: string; // própria mensagem a ser apresentada
   isUpdating: boolean = false; // está editando?

   /**
    * aqui no construtor temos a injeção de dependência de um service, que é o
    * userService.
    *O userService está na mesma pasta do componente
    * @param userService injeção de dependência do userService
    */
   constructor(private userService: UserService) { }

  /**
   * temos a inicialização do localStorage => Shared.initializeWebStorage(); caso ele
   * não esteja inicializado
   *
   * temos também a instanciação de um objeto vazio => this.user = new User('', '');
   * que faz o mapeamento com o formulário
   *
   * e temos a recuperação da lista de usuários salvos no local storage
   * this.users = this.userService.getUsers();
   */
   ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
    this.isUpdating = false;
  }

  /**
   * quando o usuário clica no botão de submeter ele verifica se a operação
   * é de edição ou de persistência(salvar um novo usuário)
   * if (!this.userService.isExist(this.user.username)){
   * fazendo assim a soliciação para o userService verificar se esse elemento
   * existe ou não que é um método do userService => isExist
   * => se não existe save para persistir
   * => se existe update para atualizar
   *
   */
  onSubmit(){
    this.isSubmitted = true;
    if (!this.userService.isExist(this.user.username)){ //verifica se existe ou não
      this.userService.save(this.user);
      this.message = 'Cadastro realizado com sucesso!';
    } else {
      this.userService.update(this.user);
      this.message = 'Cadastro atualizado com sucesso!';
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.isUpdating = false;

    /**
     * para usar aqui o reset(), foi necessário usar o viewChild acima pegando a
     * referencia do formulário e guardando no atributo form dessa classe
     */
    this.form.reset(); //limpa o formulário
    this.user = new User('', ''); //instancia novo objeto preparando formulário
    this.users = this.userService.getUsers(); //atualiza vetor de usuários
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir
   * as mudanças imediatamente na lista de usuários cadastrados
   * sem pressionar o submit.
   *
   * aqui nesse método foi realizada a prática de 'clone' justamente para não
   * usar o próprio objeto que está contido na lista de usuários para edita-lo
   * porque por meio do two-way data Binding ao alterar um valor no campo do
   * formulário isso iria refletir automaticamente no registro do respectivo objeto
   * que está na tabela, então para evitar esse problema foi criado um novo objeto
   * e o formulário referencia esse objeto aqui => this.user = clone;
   * sendo esse objeto diferente em termos de endereço de memória do objeto que
   * está armazenado na lista de usuários
   *
   * então resumindo:
   * 1º recebe uma referência ao usuário => user: User
   * 2º faz um clone
   * 3º seta o this.user = clone, lembrando que o this.user é o objeto que faz o
   *    mapeamento com o formulário, então o formulário vai passar os dados para esse
   *    novo objeto e esse novo objeto será salvo via onSubmit entrando no update
   * @param user
   */
  onEdit(user: User) {
    //this.user = user;
    let clone = User.clone(user);
    this.user = clone;
    this.isUpdating = true;
    this.isShowMessage = false;
  }

  /**
   * foi usado o window.confirm, mas o professor falou que o correto é usar o modal
   * com o botão de sim ou não
   * @param username
   * @returns
   */
  onDelete(username: string){
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + username
    );

    /**
     * caso o usuário não concorda com a deleção ele retorna e não segue na
     * execução deste método onDelete
     */
    if (!confirmation) {
      return;
    }
    let response: boolean = this.userService.delete(username);
    this.isShowMessage = true;
    this.isSuccess = response;

    /**
     * verifica se houve sucesso ou não com a deleção
     */
    if (response) {
      this.message = 'O usuário foi removido com sucesso!';
    } else {
      this.message = 'Opps! O usuário não pode ser removido!';
    }
    this.users = this.userService.getUsers();
    this.isShowMessage = false;
  }

}
