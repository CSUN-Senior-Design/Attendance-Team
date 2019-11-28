import { Component, OnInit } from '@angular/core';
import { TestingDataService } from '../services/testing-data.service';
import { Message, Type } from '../models/message.model';
import { NavbarTitleService } from '../services/navbar-title.service';

@Component({
  selector: 'app-professor-messages-page',
  templateUrl: './professor-messages-page.component.html',
  styleUrls: ['./professor-messages-page.component.css']
})
export class ProfessorMessagesPageComponent implements OnInit {
  pageTitle = "Messages";
  constructor(private testingService: TestingDataService,
    private navbarTitleService: NavbarTitleService) { }
  getNewMessage(n: number) {
    var messageType: Type;
    if (n == 0) messageType = Type.Announcement;
    else messageType = Type.Warning;
    return this.testingService.getNewMessage(messageType);
  }
  ngOnInit() {
    this.navbarTitleService.changeNavbarTitle.next(this.pageTitle);  }
}
