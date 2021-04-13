import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  @ViewChild(YouTubePlayer) youtubePlayer!: YouTubePlayer;

  @Input()
  public width: number = 250;
  public height: number = 142;  // 16:9

  @Input()
  public videoSrc: string = '';

  @Input()
  public posterSrc: string = '';
  @Input()

  public youtubeId: string = '';
  public isYoutubeVideo: boolean = false;
  public isVideoPlaying: boolean = false;
  public isApiLoaded: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadYoutubePlayerAPI();
    this.getYoutubeVideoId(this.videoSrc);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['width'];
    if (change && !change.isFirstChange()) {
      this.computeHeight();
    }
  }

  private computeHeight(): void {
    this.height = this.width * 9 / 16;  // 16:9
  }

  getPosterImageStyle(): string {
    return `background-image: url("${this.posterSrc}")`;
  }

  private loadYoutubePlayerAPI(): void {
    if (!this.isApiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.isApiLoaded = true;
    }
  }

  private getYoutubeVideoId(url: string): void {
    const youtubeRegExp: RegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(youtubeRegExp);
    if (match && match[2].length == 11) {
      this.isYoutubeVideo = true;
      this.youtubeId = match[2];
    } else {
      this.isYoutubeVideo = false;
      this.youtubeId = '';
    }
  }

  public sanitizeUrl(url: string): any {
    const cleanUrl: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return cleanUrl;
  }

  public playVideo(): void {
    this.isVideoPlaying = true;
    this.youtubePlayer.playVideo();
  }
}
