import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoestasuscriptoComponent } from './noestasuscripto.component';

describe('NoestasuscriptoComponent', () => {
  let component: NoestasuscriptoComponent;
  let fixture: ComponentFixture<NoestasuscriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoestasuscriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoestasuscriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
