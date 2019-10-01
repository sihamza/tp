import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2bindingComponent } from './ex2binding.component';

describe('Ex2bindingComponent', () => {
  let component: Ex2bindingComponent;
  let fixture: ComponentFixture<Ex2bindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2bindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2bindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
