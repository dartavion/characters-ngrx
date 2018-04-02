import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCharacters from '../../store';

@Component({
  selector: 'app-characters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<any[]>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.characters$ = this.store.select(fromCharacters.getAllCharacters);
    this.store.dispatch(new fromCharacters.LoadPokemon());
  }

  getCharacterDetail(character) {
    console.log('character::::::::::::::::::::::::::::::::::::', character);
    this.store.dispatch(new fromCharacters.GetPokemonDetails);
  }
}
