import { Component, OnInit } from '@angular/core';
import * as default_messages from "../../assets/default_messages.json";
@Component({
  selector: 'app-student-course-view-page',
  templateUrl: './student-course-view-page.component.html',
  styleUrls: ['./student-course-view-page.component.css']
})
export class StudentCourseViewPageComponent implements OnInit {

  constructor() { }

  onClick(service: number){
    var message_subject = default_messages["default-messages"][1].student.ncod[service].asl.subject;
    var message_body = default_messages["default-messages"][1].student.ncod[service].asl.body;
    window.open('mailto:ncod@csun.edu?subject=' + message_subject +'&body=' + message_body);
  }
  ngOnInit() {
    
  }

}

// Service:
//     0 - ASL
//     1 - Cart
//     2 - Note taker