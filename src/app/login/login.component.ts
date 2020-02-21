import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onClick(){
    window.open('https://www.csun.edu/it/user-id-and-password');
  }
  ngOnInit() {
  }

}

