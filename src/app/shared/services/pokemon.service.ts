import { Injectable } from '@angular/core';
import { Characters } from './base.character.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonService extends Characters {
  constructor(private http: HttpClient) {
    super();
  }

  getCharacters(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this
      .http
      .get(`${this.baseUrl}/people/?search`, {headers: headers})
      .pipe(
        // tap(data => console.log(data)),
        map(characters => characters)
      );
  }

  getPokeCharacters(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this
      .http
      .get(`${this.pokeUrl}/pokemon`, {headers: headers})
      .pipe(
        // tap(data => console.log(data)),
        map(characters => characters)
      );
  }
}
