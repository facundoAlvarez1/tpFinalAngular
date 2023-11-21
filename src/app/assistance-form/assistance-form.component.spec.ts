import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceFormComponent } from './assistance-form.component';

describe('AssistanceFormComponent', () => {
  let component: AssistanceFormComponent;
  let fixture: ComponentFixture<AssistanceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceFormComponent]
    });
    fixture = TestBed.createComponent(AssistanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
