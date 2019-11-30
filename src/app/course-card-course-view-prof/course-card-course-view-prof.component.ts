import { Course } from './../models/course.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card-course-view-prof',
  templateUrl: './course-card-course-view-prof.component.html',
  styleUrls: ['./course-card-course-view-prof.component.css']
})
export class CourseCardCourseViewProfComponent implements OnInit {
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
