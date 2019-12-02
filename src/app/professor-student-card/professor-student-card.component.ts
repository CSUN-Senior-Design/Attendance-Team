import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-professor-student-card',
  templateUrl: './professor-student-card.component.html',
  styleUrls: ['./professor-student-card.component.css']
})
export class ProfessorStudentCardComponent implements OnInit {

  isChecked = false;

  @Input('student') student: Student;

  checkPerson=false;
  if(checkPerson=true){
    this.student.attendance+=1;
  }
  constructor() { }

  ngOnInit() {
  }

  markAsChecked(){
    if(this.checkPerson==true){
      this.student.attendance+=1;
    }

  }

}
