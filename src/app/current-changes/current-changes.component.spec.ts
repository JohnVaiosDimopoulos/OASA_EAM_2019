import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChangesComponent } from './current-changes.component';

describe('CurrentChangesComponent', () => {
  let component: CurrentChangesComponent;
  let fixture: ComponentFixture<CurrentChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
