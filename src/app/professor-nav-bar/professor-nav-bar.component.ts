import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professor-nav-bar',
  templateUrl: './professor-nav-bar.component.html',
  styleUrls: ['./professor-nav-bar.component.css']
})
export class ProfessorNavBarComponent implements OnInit {
  @Input('name') name: string;
  constructor() { }

  ngOnInit() {
  }

}
