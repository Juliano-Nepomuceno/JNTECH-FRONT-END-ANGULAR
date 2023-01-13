import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartudousuariosComponent } from './listartudousuarios.component';

describe('ListartudousuariosComponent', () => {
  let component: ListartudousuariosComponent;
  let fixture: ComponentFixture<ListartudousuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartudousuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListartudousuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
