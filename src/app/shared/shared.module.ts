import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollProgressDirective } from './directives/scroll-progress.directive';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { MaterialModule } from './modules/material/material.module';
import { SecondsToMinutesPipe } from './pipes/seconds-to-minutes.pipe';
import { EpisodeNavComponent } from './components/episode-nav/episode-nav.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

const commonElements: any[] = [
  ScrollProgressDirective,
  AudioPlayerComponent,
  SecondsToMinutesPipe,
  EpisodeNavComponent,
  LogoComponent,
  VideoPlayerComponent,
];

@NgModule({
  declarations: [
    commonElements,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports: [commonElements],
})
export class SharedModule { }
