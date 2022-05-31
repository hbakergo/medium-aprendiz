import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-sort',
  templateUrl: './message-sort.component.html',
  styleUrls: ['./message-sort.component.css']
})
export class MessageSortComponent implements OnInit {
  @Input() sortBy!: String;
  @Output() switchSort = new EventEmitter<boolean>();
  sortZA! : boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.sortBy === 'ZA'){
      this.sortZA = true;
    } else {
      this.sortZA = false;
    }
  }

  /**
   * usado para enviar para o componente pai, o que deve ser feito para
   * ordenar as mensagens contida no componente pai.
   * É enviado um boolean:
   *  -true para ordenar ZA
   *  -false para ordenar AZ
   */
   onChangeSort(): void{
    this.sortZA = !this.sortZA;
    this.switchSort.emit(this.sortZA);
   }
}
