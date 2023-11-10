// transfer-instructions-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-instructions-dialog',
  templateUrl: './transfer-instructions-dialog.component.html',
  styleUrls: ['./transfer-instructions-dialog.component.css']
})
export class TransferInstructionsDialogComponent {
onNoClick() {
throw new Error('Method not implemented.');
}
  constructor(
    public dialogRef: MatDialogRef<TransferInstructionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
