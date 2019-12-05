import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-student-course-card',
  templateUrl: './student-course-card.component.html',
  styleUrls: ['./student-course-card.component.css']
})
export class StudentCourseCardComponent implements OnInit {
  @Input('course') course: Course;

  constructor() { }
  getDays() {
    return this.course.days.join(' ');
  }
  getTimes() {
    return (this.course.times.join(' - '));
  }

  ngOnInit() {
  }

}
