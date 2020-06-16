import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAmountComponent } from './credit-amount.component';

describe('CreditAmountComponent', () => {
  let component: CreditAmountComponent;
  let fixture: ComponentFixture<CreditAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
