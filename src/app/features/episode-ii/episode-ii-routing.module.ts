import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeIiComponent } from './episode-ii.component';

const routes: Routes = [{ path: '', component: EpisodeIiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeIiRoutingModule { }
