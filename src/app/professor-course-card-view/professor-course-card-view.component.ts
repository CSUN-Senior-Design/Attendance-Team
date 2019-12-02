import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-professor-course-card-view',
  templateUrl: './professor-course-card-view.component.html',
  styleUrls: ['./professor-course-card-view.component.css']
})
export class ProfessorCourseCardViewComponent implements OnInit {

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
