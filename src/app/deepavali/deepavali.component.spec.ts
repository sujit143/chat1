import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepavaliComponent } from './deepavali.component';

describe('DeepavaliComponent', () => {
  let component: DeepavaliComponent;
  let fixture: ComponentFixture<DeepavaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepavaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepavaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
