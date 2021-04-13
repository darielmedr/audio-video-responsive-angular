import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainLayoutComponent
  },
  {
    path: 'episode1',
    loadChildren: () => import('./features/episode-i/episode-i.module').then(m => m.EpisodeIModule)
  },
  {
    path: 'episode2',
    loadChildren: () => import('./features/episode-ii/episode-ii.module').then(m => m.EpisodeIiModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
