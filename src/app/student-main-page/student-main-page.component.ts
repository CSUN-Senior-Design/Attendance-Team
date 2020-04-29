import { Student } from './../models/student.model';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { TestingDataService } from '../services/testing-data.service';
import { NavbarTitleService } from '../services/navbar-title.service';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.css']
})
export class StudentMainPageComponent implements OnInit {
  pageTitle = "Courses";
  course: Course;
  student: Student;
 // constructor(private testingService: TestingDataService,
 //   private navbarTitleService: NavbarTitleService) {
 //   this.course = this.testingService.getSampleCourse();
 // }
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    //this.navbarTitleService.changeNavbarTitle.next(this.pageTitle);
    

  }

}
