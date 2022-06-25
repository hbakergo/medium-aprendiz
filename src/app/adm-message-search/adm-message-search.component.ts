import { MessageObservableService } from './../services/message-observable.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';

@Component({
  selector: 'app-adm-message-search',
  templateUrl: './adm-message-search.component.html',
  styleUrls: ['./adm-message-search.component.css']
})
export class AdmMessageSearchComponent implements OnInit {
  sentence!: string;
  author!: string;
  search!: string;
  router: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  onSearch(){
    //alert(this.sentence);
    //alert(this.author);
  }

}
