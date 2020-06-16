import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBeneficiariesComponent } from './my-beneficiaries.component';

describe('MyBeneficiariesComponent', () => {
  let component: MyBeneficiariesComponent;
  let fixture: ComponentFixture<MyBeneficiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBeneficiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
