import * as fromCharactersFeature from '../reducers';
import { CharacterState } from '../reducers';
import { createSelector } from '@ngrx/store';

import * as fromCharacters from '../reducers/pokemon.reducer';

export const getCharacterState =
  createSelector(fromCharactersFeature.getCharactersState,
    (state: CharacterState) => state.characters);

export const getCharactersEntities =
  createSelector(getCharacterState, fromCharacters.getPokemon);

export const getAllCharacters = createSelector(
  getCharactersEntities,
  (entities) => {
    return Object.keys(entities).map(name => entities[name]);
});
