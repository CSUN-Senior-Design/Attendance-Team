import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-professor-course-card',
  templateUrl: './professor-course-card.component.html',
  styleUrls: ['./professor-course-card.component.css']
})
export class ProfessorCourseCardComponent implements OnInit {
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
