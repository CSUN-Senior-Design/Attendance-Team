import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.css']
})
export class StudentInfoCardComponent implements OnInit {

  constructor(authService: AuthService) { }

  ngOnInit() {
  }

}
