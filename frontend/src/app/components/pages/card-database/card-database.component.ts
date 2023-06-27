import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/shared/models/Card';

@Component({
  selector: 'app-card-database',
  templateUrl: './card-database.component.html',
  styleUrls: ['./card-database.component.css']
})
export class CardDatabaseComponent {

  cards:Card[] =[];
  constructor(
    private cardService:CardService
  ){
    let cardsObservable:Observable<Card[]>;
    cardsObservable = cardService.getAll();

    cardsObservable.subscribe((serverCards) => {
      this.cards = serverCards;
    })
  }
}
