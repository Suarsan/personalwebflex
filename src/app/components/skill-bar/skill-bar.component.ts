import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {

  @Input() title;
  @Input() value;
  @Input() minValue;
  @Input() maxValue;
  @Input() outColor;
  @Input() inColor;
  @Input() titleColor;
  @Input() height;


  constructor() { }

  ngOnInit() {
  }

  public getValue() {
    if (this.minValue && this.maxValue) {
      // por hacer
    }
    return this.value + '%';
  }

}
