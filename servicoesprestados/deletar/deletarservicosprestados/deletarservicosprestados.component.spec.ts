import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarservicosprestadosComponent } from './deletarservicosprestados.component';

describe('DeletarservicosprestadosComponent', () => {
  let component: DeletarservicosprestadosComponent;
  let fixture: ComponentFixture<DeletarservicosprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarservicosprestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarservicosprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
