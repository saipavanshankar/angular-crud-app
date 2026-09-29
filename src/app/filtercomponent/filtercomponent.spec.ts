import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtercomponent } from './filtercomponent';

describe('Filtercomponent', () => {
  let component: Filtercomponent;
  let fixture: ComponentFixture<Filtercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filtercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filtercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
