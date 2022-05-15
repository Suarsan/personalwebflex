import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxDuallistboxComponent } from './demo-ngx-duallistbox.component';

describe('DemoNgxDuallistboxComponent', () => {
  let component: DemoNgxDuallistboxComponent;
  let fixture: ComponentFixture<DemoNgxDuallistboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNgxDuallistboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxDuallistboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
