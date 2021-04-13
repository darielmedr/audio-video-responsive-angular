import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { AudioTrack } from '../../models/audio-track';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('audioPlayer', { static: true }) player: ElementRef = new ElementRef(Audio);

  @Input()
  public audioSrc: string = '';

  public isLoading: boolean = false;
  public isPlaying: boolean = false;
  public isMuted: boolean = false;
  public currentTime: number = 0;
  public volume: number = 0.5;
  public duration: number = 0.01;

  private iOS = (/iPad|iPhone|iPod/.test(navigator.platform)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bindPlayerEvent();
  }

  private bindPlayerEvent(): void {
    this.player.nativeElement.addEventListener('playing', () => {
      this.isPlaying = true;
      this.duration = Math.floor(this.player.nativeElement.duration);
    });

    this.player.nativeElement.addEventListener('pause', () => {
      this.isPlaying = false;
    });

    this.player.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime = Math.floor(this.player.nativeElement.currentTime);
    });

    this.player.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player.nativeElement.volume);
    });

    if (!this.iOS) {
      this.player.nativeElement.addEventListener('loadstart', () => {
        this.isLoading = true;
      });
    }

    this.player.nativeElement.addEventListener('loadedmetadata', () => {
      this.isLoading = false;
      this.duration = Math.floor(this.player.nativeElement.duration);
    });

    this.player.nativeElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.currentTime = 0;
    });
  }

  public updateCurrentTime(event: MatSliderChange): void {
    const time: number = (event.value) ? event.value : this.currentTime;
    this.player.nativeElement.currentTime = time;
  }

  public playPause(): void {
    if (this.isLoading) {
      return;
    }
    if (this.player.nativeElement.paused) {
      this.player.nativeElement.play();
    } else {
      this.player.nativeElement.pause();
    }
  }

  public updateVolume(event: MatSliderChange): void {
    const volume: number = (event.value) ? event.value : 0.5;
    this.setVolume(volume);
  }
  private setVolume(volume: number) {
    this.volume = volume;
    this.player.nativeElement.volume = this.volume;
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.player.nativeElement.muted = this.isMuted;
  }
}
