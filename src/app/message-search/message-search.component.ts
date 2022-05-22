import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {
  sentence!: string;
  author!: string;
  initialDate!: Date;
  finalDate!: Date;
  category!: string[];
  search!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.search = '';

    if(this.sentence){
      this.search += this.sentence;

      alert(`A busca por mensagens contendo o texto:
          ${this.search}
    será realizada nesse evento após a implementação
    da API que irá simular o back-end!`);

    } else{
      alert("Informe o texto a buscar na mensagem!");
    }

    this.sentence = '';
  }

}
