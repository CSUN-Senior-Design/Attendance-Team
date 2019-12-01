import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-expansion-panel',
  templateUrl: './course-expansion-panel.component.html',
  styleUrls: ['./course-expansion-panel.component.css']
})
export class CourseExpansionPanelComponent implements OnInit {
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
