import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  window;
  screenHeight: number;
  topSpace: number;

  constructor(@Inject(DOCUMENT) private document) {
    this.window = this.document.defaultView;
 }

  ngOnInit() {
    this.layout();
  }

  @HostListener('window:resize', ['event'])
  onResize() {
    if (this.window.innerWidth > 768) {
      this.layout();
    }
  }
  
  private layout() {
    this.screenHeight = this.window.innerHeight;
    if (this.screenHeight < 768) {
      this.topSpace = this.screenHeight * 0.2;
    } else {
      this.topSpace = this.screenHeight * 0.3;
    }
  }

}
