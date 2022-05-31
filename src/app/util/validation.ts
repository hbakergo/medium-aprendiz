export class Validation {

  static validateEmail(email: string) {
    var expression = /\S+@\S+\.\S+/;
    return expression.test(email);
  }
}
