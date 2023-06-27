import { Injectable } from '@angular/core';
import { Card } from '../shared/models/Card';
import { sample_cards } from 'src/data';
import {HttpClient} from '@angular/common/http';
import { CARDS_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Card[]>{
    return this.http.get<Card[]>(CARDS_URL);
  }
}
