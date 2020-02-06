import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';
import { TestingDataService } from '../services/testing-data.service';

@Component({
  selector: 'app-student-course-card',
  templateUrl: './student-course-card.component.html',
  styleUrls: ['../../styles/card.css']
})
export class StudentCourseCardComponent implements OnInit {
  @Input('course') course: Course;

  constructor(private testingService: TestingDataService) { }

  getCourseDays() {
    return this.testingService.getDays(this.course);
  }
  getCourseTimes() {
    return this.testingService.getTimes(this.course);
  }


  ngOnInit() {
  }

}
