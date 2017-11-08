import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../../shared/models/pokeapi/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  providers: [PokemonService]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Observable<Pokemon>;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemon(params['name']);
    });
  }
}
