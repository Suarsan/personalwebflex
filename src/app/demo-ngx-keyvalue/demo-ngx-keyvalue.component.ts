import { Component } from '@angular/core';
import { Item } from '@suarsan/ngx-keyvalue/lib/item.interface';

@Component({
  selector: 'app-demo-ngx-keyvalue',
  templateUrl: './demo-ngx-keyvalue.component.html',
  styleUrls: ['./demo-ngx-keyvalue.component.scss']
})
export class DemoNgxKeyvalueComponent {

  input: Array<Item> = [
    { key: 'key_1', value: 'value_1' },
    { key: 'key_2', value: 'value_2' },
    { key: 'key_3', value: 'value_3' },
    { key: 'key_4', value: 'value_4' },
    { key: 'key_5', value: 'value_5' }
  ];

  constructor() { }

}
