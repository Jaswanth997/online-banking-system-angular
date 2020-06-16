import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackYourStatusComponent } from './track-your-status.component';

describe('TrackYourStatusComponent', () => {
  let component: TrackYourStatusComponent;
  let fixture: ComponentFixture<TrackYourStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackYourStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackYourStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
