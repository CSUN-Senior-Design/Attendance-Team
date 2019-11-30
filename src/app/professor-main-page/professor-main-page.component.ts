import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { TestingDataService } from '../services/testing-data.service';
import { NavbarTitleService } from '../services/navbar-title.service';

@Component({
  selector: 'app-professor-main-page',
  templateUrl: './professor-main-page.component.html',
  styleUrls: ['./professor-main-page.component.css']
})
export class ProfessorMainPageComponent implements OnInit {
  pageTitle = "Courses";
  course: Course;

  constructor(private testingService: TestingDataService,
    private navbarTitleService: NavbarTitleService) {
    this.course = this.testingService.getSampleCourse();
  }
  ngOnInit() {
    this.navbarTitleService.changeNavbarTitle.next(this.pageTitle);
  }
}
