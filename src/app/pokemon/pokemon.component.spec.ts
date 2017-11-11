import {
  fakeAsync,
  tick,
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// Router
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

// Components
import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

// Services
import { PokemonService } from '../shared/services/pokemon.service';
import { CacheService } from '../shared/services/cache.service';

// Other services and modules
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { LayoutModule } from '@angular/cdk/layout';

// HttpClientTestingModule
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// @angular/material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatPaginatorModule
} from '@angular/material';


describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
          { path: 'pokemon', component: PokemonComponent }
        ]),
        HttpClientTestingModule,
        MatGridListModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        AsyncLocalStorageModule,
        LayoutModule
      ],
      declarations: [
        PokemonComponent,
        PokemonCardComponent
      ],
      providers: [
        PokemonService,
        CacheService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to page 1', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(router.url).toBe('/pokemon?page=1');
  }));
});
