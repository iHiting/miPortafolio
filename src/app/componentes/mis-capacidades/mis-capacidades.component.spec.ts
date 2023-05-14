import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCapacidadesComponent } from './mis-capacidades.component';

describe('MisCapacidadesComponent', () => {
  let component: MisCapacidadesComponent;
  let fixture: ComponentFixture<MisCapacidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCapacidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
