import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInstructionsDialogComponent } from './transfer-instructions-dialog.component';

describe('TransferInstructionsDialogComponent', () => {
  let component: TransferInstructionsDialogComponent;
  let fixture: ComponentFixture<TransferInstructionsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferInstructionsDialogComponent]
    });
    fixture = TestBed.createComponent(TransferInstructionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
