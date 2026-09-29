import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sortings } from './sortings';

describe('Sortings', () => {
  let component: Sortings;
  let fixture: ComponentFixture<Sortings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sortings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sortings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
