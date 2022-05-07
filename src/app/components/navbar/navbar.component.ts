import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private previousScroll: number;
  hidden: boolean;
  opened: boolean;

  constructor() { 
    this.previousScroll = 0;
    this.hidden = false;
    this.opened = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.previousScroll < event.path[1].scrollY) {
      this.hidden = true;
    } else {
      if (event.path[1].scrollY < 300) {
        this.hidden = false;
      }
    }
    this.previousScroll = event.path[1].scrollY;
  }

  public toggle(state?) {
    if (undefined === state) {
      this.opened = !this.opened;
    } else {
      this.opened = state;
    }
  }

}
