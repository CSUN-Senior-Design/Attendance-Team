import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student.model';
import { STUDENT } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input('list') list: Student;
  list1=STUDENT;
  constructor() { }

  ngOnInit() {
  }

}
