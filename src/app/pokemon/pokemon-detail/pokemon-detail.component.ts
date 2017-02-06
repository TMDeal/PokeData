import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Pokemon } from '../../shared/interfaces/pokeapi/pokemon';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.pokemonService.getPokemon(+params['id']))
      .subscribe((pokemon) => this.pokemon = pokemon);
  }

}
