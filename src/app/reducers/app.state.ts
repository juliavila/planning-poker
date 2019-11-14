import { ICardState, initialCardState } from './card.state';

export interface IAppState {
  cards: ICardState;
}

export const initailAppState: IAppState = {
  cards: initialCardState
};

export function getInitalState(): IAppState {
  return initailAppState;
}
