import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PokemonService } from './shared/services/pokemon.service';
import { PageService } from './shared/services/page.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './stats/stats.component';
import { MovesComponent } from './moves/moves.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ImagifyPipe } from './shared/pipes/imagify.pipe';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { MapToIterablePipe } from './shared/pipes/map-to-iterable.pipe';
import { RangePipe } from './shared/pipes/range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatsComponent,
    MovesComponent,
    AbilitiesComponent,
    PokemonComponent,
    ImagifyPipe,
    PokemonDetailComponent,
    MapToIterablePipe,
    RangePipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PokemonService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
