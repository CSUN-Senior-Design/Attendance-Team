import { Component, OnInit, Input } from '@angular/core';
import { NavbarTitleService } from '../services/navbar-title.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('name') name: string;
  
  constructor(private navbarTitleService: NavbarTitleService) {
    this.navbarTitleService.changeNavbarTitle.subscribe((text) => {
      this.name = text;
    });
  }

  ngOnInit() {
  }

}
