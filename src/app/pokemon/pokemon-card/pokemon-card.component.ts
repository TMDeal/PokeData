import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  providers: [PokemonService]
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string;
  private pokemon: Observable<any>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemon = this.pokemonService.getPokemon(this.name);
  }

}
