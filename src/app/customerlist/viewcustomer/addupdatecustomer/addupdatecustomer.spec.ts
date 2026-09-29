import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addupdatecustomer } from './addupdatecustomer';

describe('Addupdatecustomer', () => {
  let component: Addupdatecustomer;
  let fixture: ComponentFixture<Addupdatecustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addupdatecustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addupdatecustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
