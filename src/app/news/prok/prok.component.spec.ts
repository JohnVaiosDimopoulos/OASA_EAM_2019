import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProkComponent } from './prok.component';

describe('ProkComponent', () => {
  let component: ProkComponent;
  let fixture: ComponentFixture<ProkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
