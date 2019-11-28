import { Component, OnInit } from '@angular/core';
import { TestingDataService } from '../services/testing-data.service';
import { Course } from '../models/course.model';
import { NavbarTitleService } from '../services/navbar-title.service';

@Component({
  selector: 'app-professor-settings-page',
  templateUrl: './professor-settings-page.component.html',
  styleUrls: ['./professor-settings-page.component.css']
})
export class ProfessorSettingsPageComponent implements OnInit {
  pageTitle = "Settings";
  course: Course;
  constructor(private testingService: TestingDataService,
    private navbarTitleService: NavbarTitleService) {
    this.course = testingService.getSampleCourse();
  }

  ngOnInit() {
    this.navbarTitleService.changeNavbarTitle.next(this.pageTitle);
  }
}
