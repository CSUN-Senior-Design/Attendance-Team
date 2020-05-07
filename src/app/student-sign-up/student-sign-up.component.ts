import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css']
})

export class StudentSignUpComponent implements OnInit {

  constructor(public authServices: AuthService, private router: Router) { }

  ngOnInit() {
  }
  goToSignUp()
  {
    this.router.navigate(['/studentSignUp' ]);
  }

  

}

