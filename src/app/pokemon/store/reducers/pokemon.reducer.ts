import { Action } from '@ngrx/store';
import { PokemonActions, PokemonActionTypes } from '../actions/pokemon.actions';
import * as fromActions from '../actions';

export interface PokemonState {
  entities: {[name: string]: any};
}

export const initialState: PokemonState = {
  entities: {}
};

export function reducer(state = initialState, action: PokemonActions): PokemonState {
  switch (action.type) {

    case PokemonActionTypes.LoadPokemon:
      return state;

      case fromActions.PokemonActionTypes.LoadPokemonSuccess: {
        const characters = action.payload;
        const entities = characters.reduce((ents: {[name: string]: any}, character: any) => {
          return {
            ...ents,
            [character.name]: character
          };
        }, {
          ...state.entities
        });
        return {
          ...state,
          entities
        };
      }

      case PokemonActionTypes.GetPokemonDetails:
        return state;

      case fromActions.PokemonActionTypes.GetPokemonDetailsSuccess: {
        const characters = action.payload;
        const entities = characters.reduce((ents: {[name: string]: any}, character: any) => {
          return {
            ...ents,
            [character.name]: character
          };
        }, {
          ...state.entities
        });
        return {
          ...state,
          entities
        };
      }
    default:
      return state;
  }
}

export const getPokemon = (state: any) => state.entities;
export const getPokemonDetails = (state: any) => state.entities;
