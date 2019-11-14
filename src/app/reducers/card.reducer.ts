import { CardActions, ECardActions } from './card.actions';
import { ICardState, initialCardState } from './card.state';

// import { createReducer, on } from '@ngrx/store';
// import { flip } from './card.actions';

// export const initialState = false;
// export const initialSelected = '';

// const _cardReducer = createReducer(initialState,
//   on(flip, state => !state),
// );

// const _selectReducer = createReducer(initialState,
//   on(select, state => ),
// );

// export function cardReducer(state, action) {
//   return _cardReducer(state, action);
// }

export const cardReducers = (
  state = initialCardState,
  action: CardActions
): ICardState => {
  switch (action.type) {
    case ECardActions.GetCardsSuccess: {
      return {
        ...state,
        cards: action.payload
      };
    }
    case ECardActions.GetCardSuccess: {
      return {
        ...state,
        selectedCard: action.payload
      };
    }
    default: return state;
  }
};
