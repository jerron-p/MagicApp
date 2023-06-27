import { Card } from "./Card";

export class DeckCard{
    constructor(public card:Card){

    }
    name:string = this.card.cardName;
    purpose?:string[] = this.card.purpose;
    quantity:number =1;
}