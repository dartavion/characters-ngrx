import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { CharactersComponent } from './containers/characters/characters.component';
import { PokemonService } from '../shared/services/pokemon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('characters', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [CharactersComponent],
  exports: [CharactersComponent],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
