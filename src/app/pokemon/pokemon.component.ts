import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';

import { PokemonPage } from '../shared/interfaces/pokemon-page';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private page: PokemonPage;
  private currentPage = 1;
  private pageSize = 12;
  private errorMsg: string;
  private next: string;
  private previous: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPage(this.pageSize)
      .subscribe(
        page => this.page = page,
        error => this.errorMsg = <any>error,
        () => console.log('Pokemon page retrived')
      );
  }
}
