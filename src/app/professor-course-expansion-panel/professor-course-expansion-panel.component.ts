import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professor-course-expansion-panel',
  templateUrl: './professor-course-expansion-panel.component.html',
  styleUrls: ['./professor-course-expansion-panel.component.css']
})
export class ProfessorCourseExpansionPanelComponent implements OnInit {
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
