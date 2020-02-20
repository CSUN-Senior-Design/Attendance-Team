import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-course-view-page',
  templateUrl: './student-course-view-page.component.html',
  styleUrls: ['./student-course-view-page.component.css']
})
export class StudentCourseViewPageComponent implements OnInit {

  constructor() { }

  onClick(message: string){
    window.open('mailto:ncod@csun.edu?subject=' + message + ' service change');
  }
  ngOnInit() {
  }

}
