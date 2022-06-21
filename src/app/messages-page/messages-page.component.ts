import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {
  showTitleLastMessages: boolean = false;
  authorShip?: string;
  content?: string;
  search: boolean  = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.authorShip = params['authorShip'];
      this.content = params['content'];
      this.search = params['search'];
    })
  }
}
