export class Message{
  public id: number;
  public date: Date;
  public message: string;
  public authorship: string;
  public themeId!: number;

  constructor(date: Date, message: string, authorship: string){
    this.id = Math.round(Math.random() * 1000);
    this.date = date;
    this.message = message;
    this.authorship = authorship;
  }
}
