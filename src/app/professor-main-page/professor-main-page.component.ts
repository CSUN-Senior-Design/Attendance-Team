import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-professor-main-page',
  templateUrl: './professor-main-page.component.html',
  styleUrls: ['./professor-main-page.component.css']
})
export class ProfessorMainPageComponent implements OnInit {
  title = 'Attendance-Team';
  courseList: Course[] = new Array(10);
  constructor() {
    for (var i = 0; i < 10; i++) {
      this.courseList[i] = this.fillCourse(i);
    }
  }
  fillCourse(i: number) {
    var aCourse: Course = new Course();
    aCourse = {
      name: 'CLASS ' + i + 1,
      professor: 'Dr. Spaceman',
      section: (i + 1) * 1402,
      room: 'RM ' + 1321 * (i + 1) % 10000,
      days: [
        'Mo',
        'We'
      ],
      times: [
        '9:30a',
        '10:45a'
      ]
    };
    return aCourse;
  }
  ngOnInit() {
  }

}
