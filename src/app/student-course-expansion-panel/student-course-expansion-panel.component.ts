import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-course-expansion-panel',
  templateUrl: './student-course-expansion-panel.component.html',
  styleUrls: ['./student-course-expansion-panel.component.css']
})
export class StudentCourseExpansionPanelComponent implements OnInit {
  @Input('tempName') name: string;
  @Input('tempSecNum') sectionNumber: number;

  numbers: number[];

  constructor() {
    this.numbers = new Array(15);
    this.initializeNumbers(this.numbers.length);
  }
  initializeNumbers(max: number){
    var i = 0;
    while(i < max){
      this.numbers[i] = i;
      i++;
    }
  }

  ngOnInit() {
  }

}
