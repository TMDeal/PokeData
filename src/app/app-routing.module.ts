import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsComponent } from './stats/stats.component';
import { MovesComponent } from './moves/moves.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'pokemon',
        pathMatch:  'full'
      },
      {
        path: 'pokemon',
        children: [
          { path: '', component: PokemonComponent },
          { path: ':id', component: PokemonDetailComponent }
        ]
      },
      {
        path: 'stats',
        children: [
          { path: '', component: StatsComponent }
        ]
      },
      {
        path: 'moves',
        children: [
          { path: '', component: MovesComponent }
        ]
      },
      {
        path: 'abilities',
        children: [
          { path: '', component: AbilitiesComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
