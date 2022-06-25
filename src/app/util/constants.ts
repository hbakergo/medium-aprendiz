import { User } from "../model/user";

export class Constants {
  public static readonly USERS_KEY = 'users';
  public static readonly USERNAME_KEY = 'tomaz.leite';
  public static readonly LOGGED_IN_KEY = 'eh_logado';
  //public static readonly LOGGED_IN_KEY = '';

  //usuário criado para simular o usuário logado
  public static readonly userDefault = new User('tomaz.leite', 'qwerty', true);

  public static readonly THEMES_KEY = 'themes';
  public static readonly MESSAGES_KEY = 'messages';
}
