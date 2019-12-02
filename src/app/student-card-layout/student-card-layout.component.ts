import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-student-card-layout',
  templateUrl: './student-card-layout.component.html',
  styleUrls: ['./student-card-layout.component.css']
})
export class StudentCardLayoutComponent implements OnInit {
  @Input('list') list: Course;

  constructor() { }
  ngOnInit() { }

}
