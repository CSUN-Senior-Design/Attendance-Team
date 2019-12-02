import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card-view-prof',
  templateUrl: './course-card-view-prof.component.html',
  styleUrls: ['./course-card-view-prof.component.css']
})
export class CourseCardViewProfComponent implements OnInit {

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
