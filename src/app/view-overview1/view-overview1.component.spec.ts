import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOverview1Component } from './view-overview1.component';

describe('ViewOverview1Component', () => {
  let component: ViewOverview1Component;
  let fixture: ComponentFixture<ViewOverview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOverview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOverview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
