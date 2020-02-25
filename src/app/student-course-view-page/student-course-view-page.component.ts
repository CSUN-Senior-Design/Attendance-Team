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
    var serviceType = (
      service == 0 ? default_messages["ncod-messages"].asl : 
      default_messages["ncod-messages"]["cart-typewell"]
    );
    window.open(
      'mailto:ncod@csun.edu?subject=' + serviceType.subject +'&body=' + serviceType.body
      );
  }
  ngOnInit() {
    
  }

}