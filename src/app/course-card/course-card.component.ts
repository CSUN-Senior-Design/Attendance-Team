import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input('course') course: Course;  
  sampleCourse: Course;

  constructor() {
    this.sampleCourse = {
      name: 'COMP 424',
      professor: 'Harjit Dhillon',
      section: 14023,
      room: 'JD 3510',
      days: [
        'Mo',
        'We'
      ],
      times: [
        '8:00a',
        '9:15a'
      ]
    }
  }
  getDays(aCourse: Course){
    return aCourse.days.join(' ');
  }
  getTimes(aCourse: Course){
    return (aCourse.times.join(' - '));
  }

  ngOnInit() {
  }

}
