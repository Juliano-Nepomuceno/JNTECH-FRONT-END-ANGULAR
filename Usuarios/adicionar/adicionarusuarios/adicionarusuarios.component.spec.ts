import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarusuariosComponent } from './adicionarusuarios.component';

describe('AdicionarusuariosComponent', () => {
  let component: AdicionarusuariosComponent;
  let fixture: ComponentFixture<AdicionarusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
