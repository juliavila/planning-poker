import { Injectable } from '@angular/core';
import { ICard, CardType } from './shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): ICard[] {
    const card1: ICard = { id: 1, type: CardType.Eight };
    const card2: ICard = { id: 2, type: CardType.Five };
    return [card1, card2];
  }
}
