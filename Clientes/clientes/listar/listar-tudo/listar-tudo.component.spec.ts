import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTudoComponent } from './listar-tudo.component';

describe('ListarTudoComponent', () => {
  let component: ListarTudoComponent;
  let fixture: ComponentFixture<ListarTudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
