import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxKeyvalueComponent } from './demo-ngx-keyvalue.component';

describe('DemoNgxKeyvalueComponent', () => {
  let component: DemoNgxKeyvalueComponent;
  let fixture: ComponentFixture<DemoNgxKeyvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNgxKeyvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxKeyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
