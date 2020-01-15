import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeaComponent } from './amea.component';

describe('AmeaComponent', () => {
  let component: AmeaComponent;
  let fixture: ComponentFixture<AmeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
