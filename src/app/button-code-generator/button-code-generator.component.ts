import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-code-generator',
  templateUrl: './button-code-generator.component.html',
  styleUrls: ['./button-code-generator.component.css']
})
export class ButtonCodeGeneratorComponent implements OnInit {

  isClicked : boolean = false;
  randomeCode: number;
  constructor() { }

  generateACode(){
      this.isClicked = !this.isClicked;
      this.randomeCode = Math.floor(Math.random()*900000)+100000;
  }
  ngOnInit() {
  }

}
