import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  sentence!: string;
  author!: string;
  initialDate!: Date;
  finalDate!: Date;
  category!: string[];
  search!: boolean;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
