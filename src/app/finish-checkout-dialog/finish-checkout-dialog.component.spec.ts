import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishCheckoutDialogComponent } from './finish-checkout-dialog.component';

describe('FinishCheckoutDialogComponent', () => {
  let component: FinishCheckoutDialogComponent;
  let fixture: ComponentFixture<FinishCheckoutDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishCheckoutDialogComponent]
    });
    fixture = TestBed.createComponent(FinishCheckoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
