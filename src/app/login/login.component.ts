import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }


  onClick(){
    window.open('https://www.csun.edu/it/user-id-and-password');
  }
  ngOnInit() {
  }
  goToPageSignUp()
  {
    this.router.navigate(['/studentSignUp' ]);
  }

  gmailAutentication(){
    this.authService.GoogleAuth();
    this.authService.SendVerificationMail();
  }


  

}

