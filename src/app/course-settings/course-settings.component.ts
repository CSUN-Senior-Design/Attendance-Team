import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  @Input('course') course: Course;

  numbers: any;
  constructor() {
    this.numbers = new Array(15).fill(0, 0, 15).map((x,i)=>i+1);
  }
  ngOnInit() {
  }

}
