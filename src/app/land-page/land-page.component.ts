import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  showTitleLastMessages: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
