import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarusuariosComponent } from './atualizarusuarios.component';

describe('AtualizarusuariosComponent', () => {
  let component: AtualizarusuariosComponent;
  let fixture: ComponentFixture<AtualizarusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
