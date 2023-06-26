import { Injectable } from '@angular/core';
import { Card } from '../shared/models/Card';
import { sample_cards } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getAll():Card[]{
    return sample_cards;
  }
}
