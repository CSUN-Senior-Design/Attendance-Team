import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

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
