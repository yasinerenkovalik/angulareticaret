import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialogs',
  templateUrl: './delete-dialogs.component.html',
  styleUrls: ['./delete-dialogs.component.scss']
})
export class DeleteDialogsComponent  {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState,
  ) {}

  close(): void {
    this.dialogRef.close();
  }

}
export enum DeleteState{
  Yes,No
}