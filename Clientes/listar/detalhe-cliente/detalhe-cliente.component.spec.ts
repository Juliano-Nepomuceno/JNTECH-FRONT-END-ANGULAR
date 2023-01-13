import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClienteComponent } from './detalhe-cliente.component';

describe('DetalheClienteComponent', () => {
  let component: DetalheClienteComponent;
  let fixture: ComponentFixture<DetalheClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
