import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';
import { CardService } from '../card.service';
import { IAppState } from './app.state';
import { GetCard, ECardActions, GetCardSuccess, GetCards, GetCardsSuccess } from './card.actions';
import { selectCardList } from './card.selectors';
import { of } from 'rxjs';
import { ICard } from '../shared/models/card.model';

@Injectable()
export class CardEffects {

  @Effect()
  getCard$ = this.actions$.pipe(
    // TODO: falta entender este
    ofType<GetCard>(ECardActions.GetCard),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectCardList))),
    switchMap(([id, cards]) => {
      console.log('tá passando no getCard$ ?', cards);
      const selectedCard = cards.filter(card => card.id === +id)[0];
      return of(new GetCardSuccess(selectedCard));
    })
  );

  @Effect()
  getCards$ = this.actions$.pipe(
    ofType(ECardActions.GetCards),
    exhaustMap(() => {
      return of(new GetCardsSuccess(this.cardService.getCards()));
    })
  );

  constructor(
    private cardService: CardService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }
}
