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
  private onResize() {
    if (window.innerWidth > 768) {
      this.setHeight();
      this.setLayout();
    }
  }

  public setHeight() {
    this.screenHeight = window.innerHeight;
  }

  public setLayout() {
    if (window.innerWidth < 768) {
      this.topSpace = this.screenHeight * 0.2;
    } else {
      this.topSpace = this.screenHeight * 0.3;
    }
  }

}
