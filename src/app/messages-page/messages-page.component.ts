import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {
  showTitleLastMessages: boolean = false;
  authorShip!: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Pegar os parâmetros de busca da rota, foi usado somente o authorship como exemplo
    //de passagem de parâmetro de rota
    const routeParams = this.route.snapshot.paramMap;
    const authorshipFromRoute = routeParams.get('authorship');

    if(authorshipFromRoute){
      this.authorShip = authorshipFromRoute;
    }
  }

}
