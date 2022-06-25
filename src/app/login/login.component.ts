import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginUser = new User('', '');
    //this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    this.user = Constants.userDefault;

    /**
     * será atribuido um usuário local apenas para evitar problemas de
     * ausência de usuários reais na api e manter o usuário usando o webstorage
     *
     * usuário padrão tomaz.leite
     * senha qwerty
     */
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ) {
      this.loginService.login();
      alert('Efetuando Login!');
    } else {
      alert(
        'Login Inválido! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }

}
