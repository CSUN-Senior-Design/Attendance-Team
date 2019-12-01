import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-professor-course-view-page',
  templateUrl: './professor-course-view-page.component.html',
  styleUrls: ['./professor-course-view-page.component.css']
})
export class ProfessorCourseViewPageComponent implements OnInit {

  @Input('list') list: Course;
  constructor() { }

  ngOnInit() {
  }

}
