import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-settings-page',
  templateUrl: './professor-settings-page.component.html',
  styleUrls: ['./professor-settings-page.component.css']
})
export class ProfessorSettingsPageComponent implements OnInit {

  numbers: number[];
  constructor() {
    this.numbers = new Array(16);
    this.initializeNumbers(this.numbers.length);
  }
  initializeNumbers(max: number){
    var i = 0;
    while(i < max){
      this.numbers[i] = i;
      i++;
    }
  }
  ngOnInit() { }

}
