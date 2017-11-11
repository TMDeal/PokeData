import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { PokemonDetailComponent } from './pokemon-detail.component';

import { PokemonService } from '../../shared/services/pokemon.service';
import { CacheService } from '../../shared/services/cache.service';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AsyncLocalStorageModule,
        RouterTestingModule
      ],
      providers: [
        PokemonService,
        CacheService
      ],
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
