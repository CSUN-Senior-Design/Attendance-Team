import { Component, OnInit, Input } from '@angular/core';
import { NavbarTitleService } from '../services/navbar-title.service';

@Component({
  selector: 'app-professor-nav-bar',
  templateUrl: './professor-nav-bar.component.html',
  styleUrls: ['./professor-nav-bar.component.css']
})
export class ProfessorNavBarComponent implements OnInit {
  @Input('name') name: string;
  constructor(private navbarTitleService: NavbarTitleService) {
    this.navbarTitleService.changeNavbarTitle.subscribe((text) => {
      this.name = text;
    });
  }

  ngOnInit() {
  }

}
