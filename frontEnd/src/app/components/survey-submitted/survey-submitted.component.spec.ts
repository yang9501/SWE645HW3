import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySubmittedComponent } from './survey-submitted.component';

describe('SurveySubmittedComponent', () => {
  let component: SurveySubmittedComponent;
  let fixture: ComponentFixture<SurveySubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveySubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
