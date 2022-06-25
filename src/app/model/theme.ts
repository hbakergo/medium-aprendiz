export class Theme{
  public id: number;
  public name: string;

  constructor(name: string) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
  }
}
