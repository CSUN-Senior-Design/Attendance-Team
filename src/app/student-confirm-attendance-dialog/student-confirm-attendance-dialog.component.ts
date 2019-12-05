import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-confirm-attendance-dialog',
  templateUrl: './student-confirm-attendance-dialog.component.html',
  styleUrls: ['./student-confirm-attendance-dialog.component.css']
})
export class StudentConfirmAttendanceDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StudentConfirmAttendanceDialogComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
