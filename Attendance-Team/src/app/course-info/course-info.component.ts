import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input('course') course: Course;  
  constructor() {
    
  }

  ngOnInit() {
  }
  getDays(){
    return this.course.days.join(' ');
  }
  getTimes(){
    return (this.course.times.join(' - '));
  }
}
