import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-episode-nav',
  templateUrl: './episode-nav.component.html',
  styleUrls: ['./episode-nav.component.scss']
})
export class EpisodeNavComponent implements OnInit {

  @Output('scrollToAbout') scrollToEvent: EventEmitter<void> = new EventEmitter<void>();

  public linkItems: any[] = [
    { path: 'episode1', title: '1' },
    { path: 'episode2', title: '2' },
    { path: 'episode3', title: '3' },
    { path: 'episode4', title: '4' },
    { path: 'episode5', title: '5' },
    { path: 'episode6', title: '6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scollToElement(): void {
    return this.scrollToEvent.emit();
  }
}
