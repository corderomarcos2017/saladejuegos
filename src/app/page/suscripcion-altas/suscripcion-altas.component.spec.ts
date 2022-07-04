import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionAltasComponent } from './suscripcion-altas.component';

describe('SuscripcionAltasComponent', () => {
  let component: SuscripcionAltasComponent;
  let fixture: ComponentFixture<SuscripcionAltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionAltasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionAltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
