import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../shared/services/page.service';

import { Page } from '../shared/interfaces/pages';
import { PokemonPageItem } from '../shared/interfaces/pokemon-page-item';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private page: Page<PokemonPageItem>;
  private maxSize: number;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.setPagination();
    this.route.queryParams
      .subscribe(params => {
        if (!+params['page']) {
          this.goToPage(1);
        } else {
          this.pageService.getPage<PokemonPageItem>('pokemon', +params['page'])
            .subscribe(page => this.page = page);
        }
      });
  }

  goToPage(pageNumber: number) {
    this.router.navigate(['pokemon'], {
      queryParams: {
        page: pageNumber
      }
    });
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
