import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeIComponent } from './episode-i.component';

const routes: Routes = [{ path: '', component: EpisodeIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeIRoutingModule { }
