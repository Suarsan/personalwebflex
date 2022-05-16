import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const window;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  public downloadCV() {
    window.open('assets/javiersuarezsanchez_cv.pdf', '_blank');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'assets/javiersuarezsanchez_cv.pdf');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }
}
