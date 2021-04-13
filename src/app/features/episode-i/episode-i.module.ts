import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeIRoutingModule } from './episode-i-routing.module';
import { EpisodeIComponent } from './episode-i.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReportComponent } from './components/report/report.component';
import { InterviewComponent } from './components/interview/interview.component';


@NgModule({
  declarations: [
    EpisodeIComponent,
    SummaryComponent,
    ReportComponent,
    InterviewComponent
  ],
  imports: [
    CommonModule,
    EpisodeIRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class EpisodeIModule { }
