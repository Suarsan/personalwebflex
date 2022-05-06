import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideNavbar: boolean;
  showMobileMenu: boolean;
  private previousScroll = 0;

  constructor() { }

  ngOnInit() {
    this.hideNavbar = false;
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event) {
    if (this.previousScroll < event.path[1].scrollY) {
      this.hideNavbar = true;
    } else {
      if (event.path[1].scrollY < 400) {
        this.hideNavbar = false;
      }
    }
    this.previousScroll = event.path[1].scrollY;
  }

  public toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  public goto(destiny) {
    this.showMobileMenu = !this.showMobileMenu;
    window.location.hash = destiny;
  }

}
