import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeNavComponent } from './episode-nav.component';

describe('EpisodeNavComponent', () => {
  let component: EpisodeNavComponent;
  let fixture: ComponentFixture<EpisodeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
