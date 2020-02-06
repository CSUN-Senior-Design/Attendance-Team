import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarTitleService {
  constructor() { }
  public changeNavbarTitle = new Subject<any>();

}
