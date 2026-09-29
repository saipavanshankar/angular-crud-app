import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcustomer } from './viewcustomer';

describe('Viewcustomer', () => {
  let component: Viewcustomer;
  let fixture: ComponentFixture<Viewcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewcustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
