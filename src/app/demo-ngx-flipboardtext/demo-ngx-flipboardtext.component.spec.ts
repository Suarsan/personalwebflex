import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxFlipboardtextComponent } from './demo-ngx-flipboardtext.component';

describe('DemoNgxFlipboardtextComponent', () => {
  let component: DemoNgxFlipboardtextComponent;
  let fixture: ComponentFixture<DemoNgxFlipboardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNgxFlipboardtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxFlipboardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
