import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { PokemonEffects } from './pokemon.effects';

describe('PokemonService', () => {
  let actions$: Observable<any>;
  let effects: PokemonEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PokemonEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
