import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyListComponent } from './journey-list.component';

describe('JourneyListComponent', () => {
  let component: JourneyListComponent;
  let fixture: ComponentFixture<JourneyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyListComponent]
    });
    fixture = TestBed.createComponent(JourneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
