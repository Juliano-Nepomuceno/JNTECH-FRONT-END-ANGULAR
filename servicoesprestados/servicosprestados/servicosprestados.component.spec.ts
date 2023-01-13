import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosprestadosComponent } from './servicosprestados.component';

describe('ServicosprestadosComponent', () => {
  let component: ServicosprestadosComponent;
  let fixture: ComponentFixture<ServicosprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosprestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
