import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  screenHeight: number;
  topSpace: number;

  constructor() { }

  ngOnInit() {
    this.setHeight();
    this.setLayout();
  }

  @HostListener('window:resize', ['event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.setHeight();
      this.setLayout();
    }
  }

  private setHeight() {
    this.screenHeight = window.innerHeight;
  }

  private setLayout() {
    if (window.innerWidth < 768) {
      this.topSpace = this.screenHeight * 0.2;
    } else {
      this.topSpace = this.screenHeight * 0.3;
    }
  }

}
