import { Component, OnInit, Input, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent {

  @Input() title;
  @Input() value;
  @Input() outColor;
  @Input() inColor;
  @Input() titleColor;

  constructor() { }

}
