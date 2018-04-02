import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromPokemon from '../actions/pokemon.actions';
import { switchMap, map } from 'rxjs/operators';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Injectable()
export class PokemonEffects {

  constructor(private actions$: Actions, private pokemonService: PokemonService) {}

  @Effect()
  effect$ = this.actions$
  .ofType(fromPokemon.PokemonActionTypes.LoadPokemon)
  .pipe(
    switchMap(() => {
      console.log('switch');
      return this.pokemonService.getPokeCharacters().pipe(
        map(data => new fromPokemon.LoadPokemonSuccess(data.results)
      ));
    })
  );
}
