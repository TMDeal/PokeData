import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { NamedResourceList } from '../shared/models/pokeapi/common';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Observable } from 'rxjs/Observable';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  pokemonList: Observable<NamedResourceList>;
  limit: number;
  maxPokemon: number;
  columns: number;
  activePage: number;

  constructor(
    private pokemonService: PokemonService,
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.columns = 6;
    this.limit = 30;
    this.setBreakPoints();
    this.getCurrentPage();
    this.goToPage(this.activePage);
  }

  getPokemonList(offset: number = 0) {
    return this.pokemonService.getPokemonList(this.limit, offset);
  }

  getCurrentPage() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!params['page']) {
        this.activePage = 1;
      } else {
        this.activePage = +params['page'] - 1;
      }

      const offset = (this.activePage) * this.limit;
      this.pokemonList = this.getPokemonList(offset).pipe(
        tap(pokemonList => {
          this.maxPokemon = pokemonList.count;
          return pokemonList;
        })
      );
    });
  }

  goToPage(pageNumber: number) {
    this.router.navigate([], {
      queryParams: {
        page: pageNumber
      }
    });
  }

  private setBreakPoint(breakpoints: string[], columns: number) {
    this.breakpointObserver.observe(breakpoints).subscribe(results => {
      if (results.matches) {
        this.columns = columns;
      }
    });
  }

  private setBreakPoints() {
    this.setBreakPoint([Breakpoints.HandsetPortrait],  2);
    this.setBreakPoint([Breakpoints.HandsetLandscape], 3);
    this.setBreakPoint([Breakpoints.TabletPortrait],   4);
    this.setBreakPoint([Breakpoints.TabletLandscape],  5);
    this.setBreakPoint([
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape
    ], 6);
  }
}
