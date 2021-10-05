import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemoncardComponent } from './component/pokemoncard/pokemoncard.component';

const routes: Routes = [
  {path:"",component:PokemoncardComponent},
  {path:"home",component:PokemoncardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
