import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaComponent } from './dona.component';

describe('DonaComponent', () => {
  let component: DonaComponent;
  let fixture: ComponentFixture<DonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonaComponent]
    });
    fixture = TestBed.createComponent(DonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
