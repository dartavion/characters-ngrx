import { Observable } from 'rxjs/Observable';

export abstract class Characters {
  baseUrl = 'https://swapi.co/api';
  pokeUrl = 'https://pokeapi.co/api/v2';

  abstract getCharacters(): Observable<any[]>;
}
