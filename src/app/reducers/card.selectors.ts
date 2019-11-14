import { IAppState } from './app.state';
import { ICardState } from './card.state';
import { createSelector } from '@ngrx/store';

const selectCards = (state: IAppState) => state.cards;

export const selectCardList = createSelector(
  selectCards,
  (state: ICardState) => state.cards
);

export const selectSelectedCard = createSelector(
  selectCards,
  (state: ICardState) => state.selectedCard
);
