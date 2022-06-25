import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number; //guardar o ano atual e usar para aplicar o INTERPOLATION

  constructor() {
    this.year = new Date().getFullYear(); //obter o ano atual
   }

  ngOnInit(): void {
  }

}
