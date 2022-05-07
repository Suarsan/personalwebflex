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
    this.layout();
  }

  @HostListener('window:resize', ['event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.layout();
    }
  }
  
  private layout() {
    this.screenHeight = window.innerHeight;
    if (this.screenHeight < 768) {
      this.topSpace = this.screenHeight * 0.2;
    } else {
      this.topSpace = this.screenHeight * 0.3;
    }
  }

}
