import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submain1Component } from './submain1.component';

describe('Submain1Component', () => {
  let component: Submain1Component;
  let fixture: ComponentFixture<Submain1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Submain1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Submain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
