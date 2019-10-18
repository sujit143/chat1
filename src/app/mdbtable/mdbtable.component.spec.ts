import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdbtableComponent } from './mdbtable.component';

describe('MdbtableComponent', () => {
  let component: MdbtableComponent;
  let fixture: ComponentFixture<MdbtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdbtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdbtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
