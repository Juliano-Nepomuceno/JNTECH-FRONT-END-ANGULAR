import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartudoComponent } from './listartudo.component';

describe('ListartudoComponent', () => {
  let component: ListartudoComponent;
  let fixture: ComponentFixture<ListartudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListartudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
