import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { Router } from '@angular/router';

import { PokemonService } from '../shared/services/pokemon.service';
import { CacheService } from '../shared/services/cache.service';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { LayoutModule } from '@angular/cdk/layout';

import {
  HttpClientModule,
  HttpXhrBackend
} from '@angular/common/http';

import {
  MockBackend
} from '@angular/http/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatPaginatorModule
} from '@angular/material';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatGridListModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AsyncLocalStorageModule,
        LayoutModule
      ],
      declarations: [
        PokemonComponent,
        PokemonCardComponent
      ],
      providers: [
        {
          provide: HttpXhrBackend,
          useClass: MockBackend
        },
        PokemonService,
        CacheService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
