import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarfuncionarioComponent } from './deletarfuncionario.component';

describe('DeletarfuncionarioComponent', () => {
  let component: DeletarfuncionarioComponent;
  let fixture: ComponentFixture<DeletarfuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarfuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
