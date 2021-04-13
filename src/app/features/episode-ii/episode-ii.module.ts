import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeIiRoutingModule } from './episode-ii-routing.module';
import { EpisodeIiComponent } from './episode-ii.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Chapter1Component } from './components/chapter1/chapter1.component';


@NgModule({
  declarations: [
    EpisodeIiComponent,
    Chapter1Component
  ],
  imports: [
    CommonModule,
    EpisodeIiRoutingModule,
    SharedModule
  ]
})
export class EpisodeIiModule { }
