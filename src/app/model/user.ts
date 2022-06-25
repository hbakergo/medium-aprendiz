export class User{
  name?: string;
  username: string;
  password: string;
  email?: string;
  isAdmin: boolean;

  constructor(username: string, password: string, isAdmin: boolean = false){
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.email = user.email;
    return u;
  }
}
