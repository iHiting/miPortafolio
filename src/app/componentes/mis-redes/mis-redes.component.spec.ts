import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRedesComponent } from './mis-redes.component';

describe('MisRedesComponent', () => {
  let component: MisRedesComponent;
  let fixture: ComponentFixture<MisRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
