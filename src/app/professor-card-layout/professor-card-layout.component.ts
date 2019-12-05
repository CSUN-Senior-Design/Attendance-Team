import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-professor-card-layout',
  templateUrl: './professor-card-layout.component.html',
  styleUrls: ['./professor-card-layout.component.css']
})
export class ProfessorCardLayoutComponent implements OnInit {
  @Input('list') list: Course;

  constructor() { }
  ngOnInit() { }

}
