import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-i',
  templateUrl: './episode-i.component.html',
  styleUrls: ['./episode-i.component.scss']
})
export class EpisodeIComponent implements OnInit {

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
