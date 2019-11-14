import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../reducers/app.state';
import { GetCard, GetCards } from '../reducers/card.actions';
import { selectCardList } from '../reducers/card.selectors';
import { ICard } from '../shared/models/card.model';

// import { flip } from '../reducers/card.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card$ = this.store.pipe(select(selectCardList));
  // card$ = this.store.select(state => state.cards);

  constructor(
    private store: Store<IAppState>
    // private store: Store<{ cards: ICard[] }>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetCards());
  }
}
