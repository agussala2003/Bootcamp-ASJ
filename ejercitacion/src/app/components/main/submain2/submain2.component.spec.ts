import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submain2Component } from './submain2.component';

describe('Submain2Component', () => {
  let component: Submain2Component;
  let fixture: ComponentFixture<Submain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Submain2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Submain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
