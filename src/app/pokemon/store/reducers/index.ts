import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPokemon from './pokemon.reducer';

export interface CharacterState {
  characters: fromPokemon.PokemonState;
}

export const reducers: ActionReducerMap<CharacterState> = {
  characters: fromPokemon.reducer,
};

export const getCharactersState =
  createFeatureSelector<CharacterState>('characters');
