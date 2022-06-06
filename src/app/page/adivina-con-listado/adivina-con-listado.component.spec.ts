import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaConListadoComponent } from './adivina-con-listado.component';

describe('AdivinaConListadoComponent', () => {
  let component: AdivinaConListadoComponent;
  let fixture: ComponentFixture<AdivinaConListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaConListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaConListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
