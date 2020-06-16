import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRequestsComponent } from './completed-requests.component';

describe('CompletedRequestsComponent', () => {
  let component: CompletedRequestsComponent;
  let fixture: ComponentFixture<CompletedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
