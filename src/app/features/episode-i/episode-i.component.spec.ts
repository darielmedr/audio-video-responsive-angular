import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeIComponent } from './episode-i.component';

describe('EpisodeIComponent', () => {
  let component: EpisodeIComponent;
  let fixture: ComponentFixture<EpisodeIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
