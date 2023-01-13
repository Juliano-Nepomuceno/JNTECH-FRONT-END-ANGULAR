import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarusuariosComponent } from './deletarusuarios.component';

describe('DeletarusuariosComponent', () => {
  let component: DeletarusuariosComponent;
  let fixture: ComponentFixture<DeletarusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
