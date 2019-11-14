import { ICard } from '../shared/models/card.model';

export interface ICardState {
  cards: ICard[];
  selectedCard: ICard;
}

export const initialCardState: ICardState = {
  cards: null,
  selectedCard: null
};
