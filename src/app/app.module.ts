import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CardComponent } from './card/card.component';
import { appReducers } from './reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CardEffects } from './reducers/card.effects';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CardEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
