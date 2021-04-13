import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeIiComponent } from './episode-ii.component';

describe('EpisodeIiComponent', () => {
  let component: EpisodeIiComponent;
  let fixture: ComponentFixture<EpisodeIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
