<<<<<<< Updated upstream
import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-professor-course-view-page',
  templateUrl: './professor-course-view-page.component.html',
  styleUrls: ['./professor-course-view-page.component.css']
})
export class ProfessorCourseViewPageComponent implements OnInit {

<<<<<<< Updated upstream
  @Input('list') list: Course;
=======
>>>>>>> Stashed changes
  constructor() { }

  ngOnInit() {
  }

}
