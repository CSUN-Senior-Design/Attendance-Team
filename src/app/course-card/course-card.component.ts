import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input('course') course: Course;  

  constructor() { }

  ngOnInit() {
  }

}
