import { Action } from '@ngrx/store';

export enum PokemonActionTypes {
  LoadPokemon = '[Pokemon] Load Action',
  LoadPokemonSuccess = '[Pokemon] Load Pokemon Success'
}

export class LoadPokemon implements Action {
  readonly type = PokemonActionTypes.LoadPokemon;
}

export class LoadPokemonSuccess implements Action {
  readonly type = PokemonActionTypes.LoadPokemonSuccess;
  constructor(public payload) {}
}

export type PokemonActions =
  LoadPokemon
  | LoadPokemonSuccess;
