import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student.model';
import { STUDENT } from '../models/student';

@Component({
  selector: 'app-professor-student-list',
  templateUrl: './professor-student-list.component.html',
  styleUrls: ['./professor-student-list.component.css']
})
export class ProfessorStudentListComponent implements OnInit {

  @Input('list') list: Student;
  list1=STUDENT;
  constructor() { }

  ngOnInit() {
  }

}
