import { Action } from '@ngrx/store';
import { ICard } from '../shared/models/card.model';

export enum ECardActions {
  GetCards = '[Card] Get Cards',
  GetCardsSuccess = '[Card] Get Cards Success',
  GetCard = '[Card] Get Card',
  GetCardSuccess = '[Card] Get Card Success',
}

export class GetCards implements Action {
  public readonly type = ECardActions.GetCards;
}

export class GetCardsSuccess implements Action {
  public readonly type = ECardActions.GetCardsSuccess;
  constructor(public payload: ICard[]) { }
}

export class GetCard implements Action {
  public readonly type = ECardActions.GetCard;
  constructor(public payload: number) { }
}

export class GetCardSuccess implements Action {
  public readonly type = ECardActions.GetCardSuccess;
  constructor(public payload: ICard) { }
}

export type CardActions = GetCards | GetCardsSuccess | GetCard | GetCardSuccess;
