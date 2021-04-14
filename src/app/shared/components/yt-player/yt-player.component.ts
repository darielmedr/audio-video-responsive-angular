import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss']
})
export class YtPlayerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  private unsuscribe$: Subject<void> = new Subject<void>();
  private resizeObservable$: Observable<Event> = new Observable();

  @ViewChild(YouTubePlayer) youtubePlayer!: YouTubePlayer;

  @Input()
  public fluidContainer!: HTMLElement;

  @Input()
  public videoId: string = '';

  @Input()
  public posterUrl?: string = '';
  public isVideoPlaying: boolean = false;

  public width: number = 250;
  public height: number = 142;  // 16:9

  public isApiLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadYoutubePlayerAPI();
    this.detectWindowChange();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['fluidContainer'];
    if (change) {
      this.setVideoPlayerDimensions();
    }
  }

  ngAfterViewInit(): void {
    this.setYTPlayerOptionVar();
  }

  private loadYoutubePlayerAPI(): void {
    if (!this.isApiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.isApiLoaded = true;
    }
  }

  private detectWindowChange(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeObservable$.pipe(takeUntil(this.unsuscribe$)).subscribe((event: Event) => {
      this.setVideoPlayerDimensions();
    });
  }
  private setVideoPlayerDimensions(): void {
    const widthNoPadding: number = this.getWidthNoPadding(this.fluidContainer);
    this.width = widthNoPadding;
    this.height = this.computeHeight(widthNoPadding);
  }
  private getWidthNoPadding(elHTML: HTMLElement): number {
    const leftPaddingString: string = window.getComputedStyle(elHTML, null).getPropertyValue('padding-left');
    const rightPaddingString: string = window.getComputedStyle(elHTML, null).getPropertyValue('padding-right');

    const leftPadding: number = this.convertStringPixelsToNumber(leftPaddingString);
    const rightPadding: number = this.convertStringPixelsToNumber(rightPaddingString);

    const elementWidth = elHTML.clientWidth;
    const elementPadding: number = leftPadding + rightPadding;
    const width = elementWidth - elementPadding;
    return width;
  }
  private convertStringPixelsToNumber(valueInPixels: string): number {
    if (!valueInPixels) return 0;
    if (valueInPixels.trim().length === 0) return 0;

    const valueString = valueInPixels.split('px')[0];
    const value = Number(valueString);
    return value;
  }

  private computeHeight(width: number): number {
    return width * (9 / 16);  // 16:9 aspect ratio by default
  }

  private setYTPlayerOptionVar(): void {
    const playerVars: YT.PlayerVars = {
      modestbranding: 1,
      rel: 0,
      controls: 1
    };
    this.youtubePlayer.playerVars = playerVars;
  }

  public playVideo(): void {
    this.isVideoPlaying = true;
    this.youtubePlayer.playVideo();
  }
}
