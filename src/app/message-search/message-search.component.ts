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
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
