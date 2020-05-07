import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { TestingDataService } from '../services/testing-data.service';
import { NavbarTitleService } from '../services/navbar-title.service';


@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.css']
})
export class StudentMainPageComponent implements OnInit {
  pageTitle = "Courses";
  course: Course;

  constructor(
    private authService: AuthService,
    private testingService: TestingDataService,
    private navbarTitleService: NavbarTitleService) {
    this.course = this.testingService.getSampleCourse();
  }
  ngOnInit() {
    this.navbarTitleService.changeNavbarTitle.next(this.pageTitle);
  }

}
