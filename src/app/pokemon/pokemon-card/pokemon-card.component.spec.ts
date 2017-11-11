import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import {
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { PokemonCardComponent } from './pokemon-card.component';

import { PokemonService } from '../../shared/services/pokemon.service';
import { CacheService } from '../../shared/services/cache.service';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AsyncLocalStorageModule,
        RouterTestingModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      providers: [
        PokemonService,
        CacheService
      ],
      declarations: [ PokemonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
