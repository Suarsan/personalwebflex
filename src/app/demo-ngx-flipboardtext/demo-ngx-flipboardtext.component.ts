import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ngx-flipboardtext',
  templateUrl: './demo-ngx-flipboardtext.component.html',
  styleUrls: ['./demo-ngx-flipboardtext.component.scss']
})
export class DemoNgxFlipboardtextComponent {

  data = ['This is a', 'demo of a', ' flip board text'];

  constructor() { }

}
