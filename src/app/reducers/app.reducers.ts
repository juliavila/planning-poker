import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { cardReducers } from './card.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  cards: cardReducers
};
