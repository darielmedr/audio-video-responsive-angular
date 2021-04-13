import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-ii',
  templateUrl: './episode-ii.component.html',
  styleUrls: ['./episode-ii.component.scss']
})
export class EpisodeIiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollTo(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
