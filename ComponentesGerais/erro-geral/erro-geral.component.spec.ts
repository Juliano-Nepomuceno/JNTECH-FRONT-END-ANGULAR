import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroGeralComponent } from './erro-geral.component';

describe('ErroGeralComponent', () => {
  let component: ErroGeralComponent;
  let fixture: ComponentFixture<ErroGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
