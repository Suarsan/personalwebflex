import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ngx-duallistbox',
  templateUrl: './demo-ngx-duallistbox.component.html',
  styleUrls: ['./demo-ngx-duallistbox.component.scss']
})
export class DemoNgxDuallistboxComponent implements OnInit {

  inData1 = [
    {
      id: 1,
      name: 'Noah',
      age: '19',
      gender: 'male'
    },
    {
      id: 2,
      name: 'Emma',
      age: '45',
      gender: 'female'
    },
    {
      id: 3,
      name: 'Jacob',
      age: '37',
      gender: 'male'
    },
    {
      id: 4,
      name: 'Sophia',
      age: '30',
      gender: 'female'
    },
    {
      id: 5,
      name: 'Jacob',
      age: '22',
      gender: 'male'
    },
    {
      id: 6,
      name: 'Olivia',
      age: '23',
      gender: 'female'
    }
  ];
  outData1 = [];
  outData2 = [
    {
      id: 2,
      name: 'Emma',
      age: '45',
      gender: 'female'
    },
    {
      id: 4,
      name: 'Sophia',
      age: '30',
      gender: 'female'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
