import { Component, OnInit, HostListener } from '@angular/core';

import { PageService } from '../shared/services/page.service';

import { PokemonPage } from '../shared/interfaces/pokemon-page';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private page: PokemonPage;
  private maxSize: number;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.setPagination();
    this.pageService.getPage()
      .subscribe(page => this.page = page);
  }

  goToPage(pageNumber: number) {
    this.pageService.getPage(pageNumber)
      .subscribe(page => this.page = page);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setPagination();
  }

  private setPagination() {
    if (window.innerWidth <= 576) {
      this.maxSize = 3;
    } else if (window.innerWidth <= 768) {
      this.maxSize = 5;
    } else {
      this.maxSize = 10;
    }
  }
}
