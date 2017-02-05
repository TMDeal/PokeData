import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsComponent } from './stats/stats.component';
import { MovesComponent } from './moves/moves.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        children: [
          { path: '', component:  PokemonComponent}
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
