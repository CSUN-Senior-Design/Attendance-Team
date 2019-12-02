import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-nav-bar',
  templateUrl: './student-nav-bar.component.html',
  styleUrls: ['./student-nav-bar.component.css']
})
export class StudentNavBarComponent implements OnInit {
  @Input('name') name: string;
  constructor() { }

  ngOnInit() {
  }

}
