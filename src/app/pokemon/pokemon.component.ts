import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { NamedResourceList } from '../shared/models/pokeapi/common';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

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

    this.activatedRoute.queryParams
      .filter(params => {
        if (!params.page) {
          this.goToPage(1);
        }
        return params.page;
      })
      .subscribe(params => {
        this.pokemonList = this.getPokemonList((params.page - 1) * this.limit)
          .do(pokemonList => {
            this.maxPokemon = pokemonList.count;
            return pokemonList;
          });
      });

  }

  getPokemonList(offset: number = 0) {
    return this.pokemonService.getPokemonList(this.limit, offset);
  }

  goToPage(event: PageEvent | number) {
    let pageNumber;

    if (typeof event === 'number') {
      pageNumber = event;
    } else {
      pageNumber = event.pageIndex + 1;
    }

    this.router.navigate(['/pokemon'], {
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
