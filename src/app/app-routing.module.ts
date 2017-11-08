import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemon/:name', component:  PokemonDetailComponent }
];

export let routerSettings: ExtraOptions = {
  enableTracing: false
};

if (!environment.production) {
  routerSettings = {
    enableTracing: true
  };
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerSettings)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
