import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreecvComponent } from './treecv.component';

describe('TreecvComponent', () => {
  let component: TreecvComponent;
  let fixture: ComponentFixture<TreecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
